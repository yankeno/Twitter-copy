import React from "react";
import { memo, FC } from "react";
import { TweetLoadingSpinner } from "../atoms/spinner/TweetLoadingSpinner";

export const Notification: FC = memo(() => {
    return (
        <>
            <p>Notification</p>
            <TweetLoadingSpinner />
        </>
    );
});
