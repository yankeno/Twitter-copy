import React from "react";
import { memo, FC } from "react";

import { AiOutlineRetweet } from "react-icons/ai";
import { PostedAreaIcon } from "./PostedAreaIcon";

type Props = {
    isRetweeted: boolean;
};

export const RetweetIcon: FC<Props> = memo((props) => {
    const { isRetweeted } = props;
    return (
        <PostedAreaIcon>
            <AiOutlineRetweet color={isRetweeted ? "#4ade80" : "#9ca3af"} />
        </PostedAreaIcon>
    );
});
