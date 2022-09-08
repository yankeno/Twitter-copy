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
        <div>
            <ProfileAvatar url="http://placekitten.com/g/200/200" />
            <TweetTextArea placeholder="いまなにしてる？" />
            <div className="grid grid-cols-5 w-48">
                <PictureIcon />
                <GifIcon />
                <VoteIcon />
                <EmojiIcon />
                <ReserveIcon />
            </div>
            <SecondaryTweetButton />
        </div>
    );
});
