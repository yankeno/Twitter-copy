import React from "react";
import { memo, FC } from "react";

import { ImBubble } from "react-icons/im";
import { PostedAreaIcon } from "./PostedAreaIcon";

export const ReplyIcon: FC = memo(() => {
    return (
        <PostedAreaIcon>
            <ImBubble color="#9ca3af" />
        </PostedAreaIcon>
    );
});
