import React from "react";
import { memo, FC, useContext } from "react";
import { usePostTweet } from "../../hooks/usePostTweet";
import { TweetLoadContext } from "../../providers/TweetLoadProvider";

const baseUrl = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
};

export const SecondaryTweetButton: FC = memo(() => {
    const onClickSendTweet = usePostTweet();
    return (
        <button
            className="bg-blue-400 hover:bg-blue-400/90 text-sm text-white py-2 px-4 mr-2 font-bold w-30 rounded-full flex"
            onClick={onClickSendTweet}
        >
            ツイートする
        </button>
    );
});
