import React from "react";
import { memo, FC } from "react";
import { TweetEditIcon } from "../atoms/icons/TweetEditIcon";

export const Notification: FC = memo(() => {
    return (
        <>
            <p>Notification</p>
            <TweetEditIcon />
        </>
    );
});
