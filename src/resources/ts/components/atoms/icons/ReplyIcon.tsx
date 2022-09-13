import React from "react";
import { memo, FC } from "react";

import { ImBubble } from "react-icons/im";
import { PosteAreaIcon } from "./PostedAreaIcon";

export const ReplyIcon: FC = memo(() => {
    return (
        <PosteAreaIcon>
            <ImBubble />
        </PosteAreaIcon>
    );
});
