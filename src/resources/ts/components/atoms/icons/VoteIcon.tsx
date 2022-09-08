import React from "react";
import { memo, FC } from "react";

import { TweetAreaIcon } from "./TweetAreaIcon";
import { BsFileBarGraphFill } from "react-icons/bs";

export const VoteIcon: FC = memo(() => {
    return (
        <TweetAreaIcon>
            <BsFileBarGraphFill />
        </TweetAreaIcon>
    );
});
