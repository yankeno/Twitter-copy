import React from "react";
import { memo, FC } from "react";

import { EmojiIcon } from "../atoms/icons/EmojiIcon";
import { PictureIcon } from "../atoms/icons/PictureIcon";
import { VoteIcon } from "../atoms/icons/VoteIcon";
import { ProfileAvatar } from "../atoms/picture/ProfileAvatar";
import { TweetTextArea } from "../atoms/input/TweetTextArea";
import { ReserveIcon } from "../atoms/icons/ReserveIcon";
import { GifIcon } from "../atoms/icons/GifIcon";
import { SecondaryTweetButton } from "../atoms/buttons/SecondaryTweetButton";

export const TweetArea: FC = memo(() => {
    return (
        <>
            <div className="h-44 border-solid border-b">
                <div className="flex justify-start">
                    <div className="h-24 w-14 m-4">
                        <ProfileAvatar url="/storage/img/avatar/100.jpg" />
                    </div>
                    <div className="ml-2 mt-4">
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
                    <div className="ml-[25%]">
                        <SecondaryTweetButton />
                    </div>
                </div>
            </div>
        </>
    );
});
