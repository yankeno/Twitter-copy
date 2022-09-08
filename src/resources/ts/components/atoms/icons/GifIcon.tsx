import React from "react";
import { memo, FC } from "react";

import { TweetAreaIcon } from "./TweetAreaIcon";
import { RiFileGifFill } from "react-icons/ri";

export const GifIcon: FC = memo(() => {
    return (
        <TweetAreaIcon>
            <RiFileGifFill />
        </TweetAreaIcon>
    );
});
