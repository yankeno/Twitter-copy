import React from "react";
import { memo, FC } from "react";

import { TweetAreaIcon } from "./TweetAreaIcon";
import { AiFillSchedule } from "react-icons/ai";

export const ReserveIcon: FC = memo(() => {
    return (
        <TweetAreaIcon>
            <AiFillSchedule />
        </TweetAreaIcon>
    );
});
