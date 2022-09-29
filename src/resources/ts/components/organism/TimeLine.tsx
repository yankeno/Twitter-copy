import React, { useEffect, useState } from "react";
import { memo, FC } from "react";

import { PostedTweetArea } from "../molecules/PostedTweetArea";
import { TweetArea } from "../molecules/TweetArea";
import { TweetLoadingSpinner } from "../atoms/spinner/TweetLoadingSpinner";

const baseUrl = import.meta.env.VITE_APP_URL;

export const TimeLine: FC = memo(() => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const loadTweets = () => {
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
            })
            .finally(() => {
                setIsLoaded(true);
            });
    };
    useEffect(() => {
        loadTweets();
    }, []);
    return (
        <>
            <div className="w-[40%]">
                <TweetArea />
                {isLoaded ? (
                    <PostedTweetArea
                        tweetId={"1"}
                        account="nyanko_star"
                        userName="アンゴラ村長"
                        isAuthAccount={true}
                        avatarUrl="https://pbs.twimg.com/profile_images/1065277773625810946/0kLo6Xb5_x96.jpg"
                        tweet="三助ダサいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
                        isLiked={true}
                    />
                ) : (
                    <div className="flex justify-center my-2">
                        <TweetLoadingSpinner />
                    </div>
                )}
            </div>
        </>
    );
});
