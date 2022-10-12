import React, { useState } from "react";
import { memo, FC, ChangeEvent } from "react";
import { usePostTweet } from "../../hooks/usePostTweet";

type Props = {
    placeholder: string;
};

export const TweetTextArea: FC<Props> = memo((props) => {
    const { placeholder } = props;
    const postTweet = usePostTweet();
    const onKeyDownSendTweet = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
            postTweet("tweetArea");
        }
    };

    /**
     * state はコンポーネント内で定義する!!!!!
     * -> Cannot read properties of null ("reading useState") が発生する
     */
    const [text, setText] = useState<string>("");
    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        <>
            <textarea
                className="textarea w-[500px] h-24 px-2 py-2 text-lg outline-none resize-none overscroll-none"
                placeholder={placeholder}
                onChange={onChangeText}
                onKeyDown={onKeyDownSendTweet}
                id="tweetArea"
            ></textarea>
        </>
    );
});
