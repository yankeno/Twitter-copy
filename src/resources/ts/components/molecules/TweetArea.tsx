import React, { ChangeEvent, useState } from "react";
import { memo, FC } from "react";

import { EmojiIcon } from "../atoms/icons/EmojiIcon";
import { PictureIcon } from "../atoms/icons/PictureIcon";
import { VoteIcon } from "../atoms/icons/VoteIcon";
import { ProfileAvatar } from "../atoms/picture/ProfileAvatar";
import { ReserveIcon } from "../atoms/icons/ReserveIcon";
import { GifIcon } from "../atoms/icons/GifIcon";
import { SecondaryTweetButton } from "../atoms/buttons/SecondaryTweetButton";
import { useLoginUser } from "../hooks/useLoginUser";
import { usePostTweet } from "../hooks/usePostTweet";

export const TweetArea: FC = memo(() => {
    const { loginUser } = useLoginUser();

    /**
     * state はコンポーネント内で定義する!!!!!
     * -> Cannot read properties of null ("reading useState") が発生する
     */
    const [text, setText] = useState<string>("");

    const postTweet = usePostTweet();
    const onKeyDownSendTweet = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
            postTweet(text, setText);
        }
    };

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };
    return (
        <>
            <div className="h-44 border-solid border-b">
                <div className="flex justify-start">
                    <div className="h-24 w-14 m-4">
                        <ProfileAvatar
                            url={
                                loginUser?.avatar_url ??
                                "/storage/img/avatar/default.jpg"
                            }
                        />
                    </div>
                    <div className="ml-2 mt-4">
                        <textarea
                            className="textarea w-[500px] h-24 px-2 py-2 text-lg outline-none resize-none overscroll-none"
                            placeholder="いまどうしてる？"
                            onChange={onChangeText}
                            onKeyDown={onKeyDownSendTweet}
                            id="tweetArea"
                        ></textarea>
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
                        <SecondaryTweetButton text={text} setText={setText} />
                    </div>
                </div>
            </div>
        </>
    );
});
