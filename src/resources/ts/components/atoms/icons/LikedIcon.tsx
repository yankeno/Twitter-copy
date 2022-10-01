import React from "react";
import { memo, FC, useState } from "react";

import { AiFillHeart } from "react-icons/ai";
import { PosteAreaIcon } from "./PostedAreaIcon";

type Props = {
    isLiked: boolean;
};

export const LikedIcon: FC<Props> = memo((props) => {
    const { isLiked } = props;
    const [isOwnLiked, setIsOwnLiked] = useState<boolean>(isLiked);

    const onClickLiked = () => {
        setIsOwnLiked(!isOwnLiked);
    };

    return (
        <PosteAreaIcon>
            <AiFillHeart
                color={isOwnLiked ? "#ef4444" : "#9ca3af"}
                onClick={onClickLiked}
            />
        </PosteAreaIcon>
    );
});
