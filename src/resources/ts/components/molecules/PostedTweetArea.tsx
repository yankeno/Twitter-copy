import React from "react";
import { memo, FC } from "react";

import { AuthorizedBadgeIcon } from "../atoms/icons/AuthorizedBadgeIcon";

import { ProfileAvatar } from "../atoms/picture/ProfileAvatar";
import { ReplyIcon } from "../atoms/icons/ReplyIcon";
import { LikedIcon } from "../atoms/icons/LikedIcon";
import { RetweetIcon } from "../atoms/icons/RetweetIcon";

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
    return (
        <div className="p-2 brder-solid border-b" key={tweetId}>
            <div className=" m-0 min-h-24 w-full flex justify-start">
                <ProfileAvatar url={avatarUrl} />
                <div className="mx-3">
                    <div className="flex justify-start inline items-center">
                        <span className="text-gray-700 font-bold">
                            {userName}
                        </span>
                        <span>{isAuthAccount && <AuthorizedBadgeIcon />}</span>
                        <span className="px-1 text-sm text-gray-400">
                            @{account}
                        </span>
                        <span>{createdAt.toLocaleString()}</span>
                    </div>
                    <div className="py-2 min-h-16">{tweet}</div>
                    <div className="flex justify-start gap-x-32 items-end">
                        <ReplyIcon />
                        <LikedIcon isLiked={isLiked} />
                        <RetweetIcon isRetweeted={false} />
                    </div>
                </div>
            </div>
        </div>
    );
});
