import React, { useState } from "react";
import { Tweet } from "../../types/api/tweet";
import { PostedTweetArea } from "../molecules/PostedTweetArea";
import { toast } from "react-hot-toast";
import { useTweet } from "./useTweet";

const baseUrl: string = import.meta.env.VITE_APP_URL;
let list: Array<JSX.Element>;
let query: string;

export const useFetchTweets = () => {
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const { tweets, setTweets } = useTweet();

    const fetchTweets = () => {
        if (!hasMore) return;
        query = "?cursor=" + nextCursor;
        fetch(`${baseUrl}/api/tweet${query}`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) {
                    toast.error("ツイートの取得に失敗しました。");
                    return;
                }
                return res.json();
            })
            .then((data) => {
                if (data.message !== "successful") {
                    toast.error("ツイートの取得に失敗しました。");
                    return;
                }
                data.tweets.next_cursor === null
                    ? setHasMore(false)
                    : setNextCursor(data.tweets.next_cursor);
                list = data.tweets.data.map((tweet: Tweet) => {
                    return (
                        <PostedTweetArea
                            key={tweet.id}
                            tweetId={tweet.id}
                            account={tweet.user.account}
                            userName={tweet.user.name}
                            isAuthAccount={tweet.user.authorized}
                            avatarUrl={tweet.user.avatar_url}
                            tweet={tweet.tweet}
                            isLiked={false}
                            likes={tweet.likes}
                            retweets={tweet.retweets}
                            replies={tweet.replies}
                            createdAt={tweet.created_at}
                        />
                    );
                });
                setTweets([...tweets, ...list]);
            });
    };
    return { tweets, hasMore, fetchTweets };
};
