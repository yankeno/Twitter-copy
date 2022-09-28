import React, { useEffect } from "react";
import { memo, FC } from "react";

import { PostedTweetArea } from "../molecules/PostedTweetArea";
import { TweetArea } from "../molecules/TweetArea";

const baseUrl = import.meta.env.VITE_APP_URL;

const async loadTweets = () => {
    fetch(`${baseUrl}/api/tweet`, {
        method: "GET",
    })
        .then((res) => {
            if (!res.ok) {
                alert("ツイートの取得に失敗しました。");
                return;
            }
            return res.json();
        })
        .then((data) => {
            if (data.message !== "successful") {
                alert("ツイートの取得に失敗しました。");
                return;
            }
            console.log(data.tweets[0].tweet);
        });
}

export const TimeLine: FC = memo(() => {
    useEffect(() => {

    }, []);
    return (
        <div className="w-[40%]">
            <TweetArea />
            <PostedTweetArea
                tweetId={"1"}
                account="nyanko_star"
                userName="アンゴラ村長"
                isAuthAccount={true}
                avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                tweet="三助ダサいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
                isLiked={true}
            />
            <PostedTweetArea
                tweetId={"2"}
                account="nyanko_star"
                userName="アンゴラ村長"
                isAuthAccount={true}
                avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                tweet="三助ダサいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
                isLiked={true}
            />
            <PostedTweetArea
                tweetId={"3"}
                account="nyanko_star"
                userName="アンゴラ村長"
                isAuthAccount={true}
                avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                tweet="三助ダサいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
                isLiked={true}
            />
            <PostedTweetArea
                tweetId={"4"}
                account="nyanko_star"
                userName="アンゴラ村長"
                isAuthAccount={true}
                avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                tweet="三助ダサいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
                isLiked={true}
            />
            <PostedTweetArea
                tweetId={"5"}
                account="nyanko_star"
                userName="アンゴラ村長"
                isAuthAccount={true}
                avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                tweet="三助ダサいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
                isLiked={true}
            />
            <PostedTweetArea
                tweetId={"6"}
                account="nyanko_star"
                userName="アンゴラ村長"
                isAuthAccount={true}
                avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                tweet="三助ダサいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
                isLiked={true}
            />
            <PostedTweetArea
                tweetId={"7"}
                account="nyanko_star"
                userName="アンゴラ村長"
                isAuthAccount={true}
                avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                tweet="三助ダサいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
                isLiked={true}
            />
            <PostedTweetArea
                tweetId={"8"}
                account="nyanko_star"
                userName="アンゴラ村長"
                isAuthAccount={true}
                avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                tweet="三助ダサいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
                isLiked={true}
            />
            <PostedTweetArea
                tweetId={"9"}
                account="nyanko_star"
                userName="アンゴラ村長"
                isAuthAccount={true}
                avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                tweet="三助ダサいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
                isLiked={true}
            />
            <PostedTweetArea
                tweetId={"10"}
                account="nyanko_star"
                userName="アンゴラ村長"
                isAuthAccount={true}
                avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                tweet="三助ダサいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
                isLiked={true}
            />
            <PostedTweetArea
                tweetId={"11"}
                account="nyanko_star"
                userName="アンゴラ村長"
                isAuthAccount={true}
                avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                tweet="三助ダサいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
                isLiked={true}
            />
        </div>
    );
});
