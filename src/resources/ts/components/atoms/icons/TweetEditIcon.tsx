import React from "react";
import { memo, FC } from "react";

import { BsThreeDots } from "react-icons/bs";
import { PostedAreaIcon } from "./PostedAreaIcon";

export const TweetEditIcon: FC = memo(() => {
    return (
        <PostedAreaIcon>
            <BsThreeDots color="#9ca3af" />
        </PostedAreaIcon>
    );
});
