import React from "react";
import { memo, FC } from "react";

import { AiOutlineRetweet } from "react-icons/ai";
import { PosteAreaIcon } from "./PostedAreaIcon";

export const RetweetIcon: FC = memo(() => {
    return (
        <PosteAreaIcon>
            <AiOutlineRetweet />
        </PosteAreaIcon>
    );
});
