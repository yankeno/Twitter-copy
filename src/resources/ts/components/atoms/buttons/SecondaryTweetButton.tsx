import React from "react";
import { memo, FC } from "react";
import { usePostTweet } from "../../hooks/usePostTweet";

export const SecondaryTweetButton: FC = memo(() => {
    const postTweet = usePostTweet();
    const onClickSendTweet = () => {
        postTweet("tweetArea");
    };
    return (
        <button
            className="bg-blue-400 hover:bg-blue-400/90 text-sm text-white py-2 px-4 mr-2 font-bold max-w-30 rounded-full flex"
            onClick={onClickSendTweet}
        >
            ツイートする
        </button>
    );
});
