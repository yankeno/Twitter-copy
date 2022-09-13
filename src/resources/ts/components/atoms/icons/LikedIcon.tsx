import React from "react";
import { memo, FC } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { PosteAreaIcon } from "./PostedAreaIcon";

type Props = {
    isLiked: boolean;
};

export const LikedIcon: FC<Props> = memo((props) => {
    const { isLiked } = props;
    return (
        <PosteAreaIcon>
            <div className="outline-none">
                <AiOutlineHeart />
            </div>
        </PosteAreaIcon>
    );
});
