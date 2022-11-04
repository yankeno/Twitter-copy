import React, { Dispatch, SetStateAction } from "react";
import { memo, FC } from "react";
import { usePostTweet } from "../../hooks/usePostTweet";

type Props = {
    text: string;
    setText: Dispatch<SetStateAction<string>>;
};
export const SecondaryTweetButton: FC<Props> = memo((props) => {
    const { text, setText } = props;
    const postTweet = usePostTweet();
    const onClickSendTweet = () => {
        postTweet(text, setText);
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
