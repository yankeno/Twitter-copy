import React from "react";
import { memo, FC } from "react";

const onClickAlert = () => alert("tweet button");

export const SecondaryTweetButton: FC = memo(() => {
    return (
        <button
            className="bg-blue-400 hover:bg-blue-400/90 text-sm text-white py-2 px-2 font-bold mx-2 my-8 w-30 rounded-full flex"
            onClick={onClickAlert}
        >
            ツイートする
        </button>
    );
});
