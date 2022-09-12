import React from "react";
import { memo, FC } from "react";

import { PostedTweetArea } from "../molecules/PostedTweetArea";
import { TweetArea } from "../molecules/TweetArea";

export const TimeLine: FC = memo((props) => {
    return (
        <>
            <TweetArea />
            <PostedTweetArea
                id="nyanko_star"
                userName="アンゴラ村長"
                isAuthAccount={true}
                avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                tweet="三助ダサい"
            />
        </>
    );
});
