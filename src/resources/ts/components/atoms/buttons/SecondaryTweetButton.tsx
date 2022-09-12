import React from "react";
import { memo, FC } from "react";

const onClickAlert = () => alert("tweet button");

export const SecondaryTweetButton: FC = memo(() => {
    return (
        <button
            className="bg-blue-400 hover:bg-blue-400/90 text-sm text-white py-2 px-4 mr-2 font-bold w-30 rounded-full flex"
            onClick={onClickAlert}
        >
            ツイートする
        </button>
    );
});
