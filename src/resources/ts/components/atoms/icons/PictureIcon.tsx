import React from "react";
import { memo, FC } from "react";

import { TweetAreaIcon } from "./TweetAreaIcon";
import { HiPhotograph } from "react-icons/hi";

export const PictureIcon: FC = memo(() => {
    return (
        <TweetAreaIcon>
            <HiPhotograph />
        </TweetAreaIcon>
    );
});
