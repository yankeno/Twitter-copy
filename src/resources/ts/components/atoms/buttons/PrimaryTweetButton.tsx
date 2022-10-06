import React from "react";
import { memo, FC } from "react";
import { SecondaryButton } from "./SecondaruButton";

const onClickAlert = () => alert("tweet button");
export const PrimaryTweetButton: FC = memo(() => {
    return (
        <SecondaryButton onClick={onClickAlert}>
            <p>ツイートする</p>
        </SecondaryButton>
    );
});
