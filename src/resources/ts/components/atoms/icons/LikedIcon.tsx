import React from "react";
import { memo, FC } from "react";

import { AiFillHeart } from "react-icons/ai";
import { PosteAreaIcon } from "./PostedAreaIcon";

type Props = {
    isLiked: boolean;
};

export const LikedIcon: FC<Props> = memo((props) => {
    const { isLiked } = props;
    return (
        <PosteAreaIcon>
            <AiFillHeart color={isLiked ? "#ef4444" : "#9ca3af"} />
        </PosteAreaIcon>
    );
});
