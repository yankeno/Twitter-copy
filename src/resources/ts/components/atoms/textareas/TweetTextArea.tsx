import React, { useState } from "react";
import { memo, FC, ChangeEvent } from "react";

type Props = {
    placeholder: string;
};

export const TweetTextArea: FC<Props> = memo((props) => {
    const { placeholder } = props;

    /**
     * state はコンポーネント内で定義する!!!!!
     * -> Cannot read properties of null ("reading useState") が発生する
     */
    const [text, setText] = useState<string>("");
    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        <textarea
            className="textarea w-96 h-24 px-2 py-2 outline-none resize-none"
            placeholder={placeholder}
            onChange={onChangeText}
        ></textarea>
    );
});
