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
import { TweetDeleteModal } from "./TweetDeleteModal";
import { TweetEditModal } from "./TweetEditModal";

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

    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const onOpenDeleteModal = () => {
        setShowDeleteModal(true);
    };
    const onCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };
    const onOpenEditModal = () => {
        setShowEditModal(true);
    };
    const onCloseEditModal = () => {
        setShowEditModal(false);
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
                            <MenuItem onClick={onOpenEditModal}>編集</MenuItem>
                            <MenuItem onClick={onOpenDeleteModal}>
                                削除
                            </MenuItem>
                        </Menu>
                    </span>
                </div>
                <div className="py-2 min-h-16">{tweet}</div>
                <div className="flex md:gap-x-32 items-center">
                    <div className="flex items-center">
                        <ReplyIcon />
                        <div className="text-[#9ca3af] text-sm">{10}</div>
                    </div>
                    <div className="flex items-center">
                        <LikedIcon isLiked={isLiked} />
                        <div className="text-[#9ca3af] text-sm">{10}</div>
                    </div>
                    <div className="flex items-center">
                        <RetweetIcon isRetweeted={true} />
                        <div className="text-[#9ca3af] text-sm">{10}</div>
                    </div>
                </div>
            </div>
            {showDeleteModal ? (
                <TweetDeleteModal
                    tweetId={tweetId}
                    onClose={onCloseDeleteModal}
                />
            ) : null}
            {showEditModal ? (
                <TweetEditModal
                    tweetId={tweetId}
                    tweet={tweet}
                    onClose={onCloseEditModal}
                />
            ) : null}
        </div>
    );
});
