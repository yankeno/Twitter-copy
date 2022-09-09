import React from "react";
import { memo, FC } from "react";

import { EmojiIcon } from "../atoms/icons/EmojiIcon";
import { PictureIcon } from "../atoms/icons/PictureIcon";
import { VoteIcon } from "../atoms/icons/VoteIcon";
import { ProfileAvatar } from "../atoms/picture/ProfileAvatar";
import { TweetTextArea } from "../atoms/textareas/TweetTextArea";
import { ReserveIcon } from "../atoms/icons/ReserveIcon";
import { GifIcon } from "../atoms/icons/GifIcon";
import { SecondaryTweetButton } from "../atoms/buttons/SecondaryTweetButton";

export const TweetArea: FC = memo(() => {
    return (
        <div className="w-2/3">
            <div className="flex justify-start">
                <div className="h-24 w-14 m-4">
                    <ProfileAvatar url="http://placekitten.com/g/200/200" />
                </div>
                <div className="ml-2 mt-4 w-5/6">
                    <TweetTextArea placeholder="いまどうしてる？" />
                </div>
            </div>

            <div className="flex items-start">
                <div className="grid grid-cols-5 w-48 ml-24">
                    <PictureIcon />
                    <GifIcon />
                    <VoteIcon />
                    <EmojiIcon />
                    <ReserveIcon />
                </div>
                <div className="ml-52">
                    <SecondaryTweetButton />
                </div>
            </div>
        </div>
    );
});
