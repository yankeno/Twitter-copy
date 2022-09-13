import React from "react";
import { memo, FC } from "react";
import { AuthorizedBadgeIcon } from "../atoms/icons/AuthorizedBadgeIcon";
import { ProfileAvatar } from "../atoms/picture/ProfileAvatar";

type Props = {
    id: string;
    userName: string;
    isAuthAccount: boolean;
    isLiked: boolean;
    avatarUrl: string;
    tweet: string;
};

export const PostedTweetArea: FC<Props> = memo((props) => {
    const { tweet, avatarUrl, isAuthAccount, userName, id } = props;
    return (
        <div>
            <ProfileAvatar url={avatarUrl} />
            {userName}
            <span>{isAuthAccount && <AuthorizedBadgeIcon />}</span>
            <span className="text-sm text-gray-400">@{id}</span>
            {tweet}
        </div>
    );
});
