import React from "react";
import { memo, FC, useState } from "react";

import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { AuthorizedBadgeIcon } from "../atoms/icons/AuthorizedBadgeIcon";
import { ProfileAvatar } from "../atoms/picture/ProfileAvatar";
import { ReplyIcon } from "../atoms/icons/ReplyIcon";
import { LikedIcon } from "../atoms/icons/LikedIcon";
import { RetweetIcon } from "../atoms/icons/RetweetIcon";
import { TweetEditIcon } from "../atoms/icons/TweetEditIcon";
import { useDeleteTweet } from "../hooks/useDeleteTweet";
import { TweetDeleteModal } from "./TweetDeleteModal";

type Props = {
    tweetId: number;
    account: string;
    userName: string;
    isAuthAccount: boolean;
    isLiked: boolean;
    avatarUrl: string;
    tweet: string;
    likes: number;
    retweets: number;
    replies: number;
    createdAt: Date;
};

export const PostedTweetArea: FC<Props> = memo((props) => {
    const {
        tweetId,
        account,
        tweet,
        avatarUrl,
        isAuthAccount,
        userName,
        isLiked,
        createdAt,
    } = props;

    const [showModal, setShowModal] = useState<boolean>(false);
    // const deleteTweet = useDeleteTweet;
    const onOpenModal = () => {
        setShowModal(true);
    };
    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div
            className="m-0 flex justify-start p-2 brder-solid border-b"
            key={tweetId}
        >
            <ProfileAvatar url={avatarUrl} />
            <div className="mx-3 w-full">
                <div className="flex justify-start inline items-center">
                    <span className="text-gray-700 font-bold">{userName}</span>
                    <span>{isAuthAccount && <AuthorizedBadgeIcon />}</span>
                    <span className="px-1 text-sm text-gray-400">
                        @{account}
                    </span>
                    {/* <span>{createdAt.toLocaleString()}</span> */}
                    <span className="ml-auto">
                        <Menu
                            menuButton={
                                <MenuButton>
                                    <TweetEditIcon />
                                </MenuButton>
                            }
                            transition
                        >
                            <MenuItem>編集</MenuItem>
                            <MenuItem onClick={onOpenModal}>削除</MenuItem>
                        </Menu>
                    </span>
                </div>
                <div className="py-2 min-h-16">{tweet}</div>
                <div className="flex gap-x-32">
                    <div className="flex">
                        <ReplyIcon />
                        <div className="text-[#9ca3af] text-sm">{10}</div>
                    </div>

                    <LikedIcon isLiked={isLiked} />
                    <RetweetIcon isRetweeted={true} />
                </div>
            </div>
            {showModal ? (
                <TweetDeleteModal tweetId={tweetId} onClose={onCloseModal} />
            ) : null}
        </div>
    );
});
