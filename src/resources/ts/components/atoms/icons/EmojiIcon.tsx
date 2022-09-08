import React from "react";
import { memo, FC } from "react";

import { TweetAreaIcon } from "./TweetAreaIcon";
import { BsFillEmojiSmileFill } from "react-icons/bs";

export const EmojiIcon: FC = memo(() => {
    return (
        <TweetAreaIcon>
            <BsFillEmojiSmileFill />
        </TweetAreaIcon>
    );
});
