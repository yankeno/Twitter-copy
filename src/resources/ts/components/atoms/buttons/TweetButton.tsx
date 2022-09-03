import React from "react";
import { memo, FC } from "react";
import { SecondaryButton } from "./SecondaryBytton";

const onClickAlert = () => alert("tweet button");
export const TweetButton: FC = memo(() => {
    return (
        <SecondaryButton onClick={onClickAlert}>
            <p>ツイートする</p>
        </SecondaryButton>
    );
});
