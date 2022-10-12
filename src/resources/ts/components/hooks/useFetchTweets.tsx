import React, { useContext, useEffect, useState } from "react";
import { Tweet } from "../../types/api/tweet";
import { PostedTweetArea } from "../molecules/PostedTweetArea";

const baseUrl: string = import.meta.env.VITE_APP_URL;
let list: Array<JSX.Element>;
let query: string;

export const useFetchTweets = () => {
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [nextPage, setNextPage] = useState<number>(1);
    const [tweets, setTweets] = useState<Array<JSX.Element>>([]);

    const fetchTweets = () => {
        if (!hasMore) return;
        query = "?page=" + nextPage;

        fetch(`${baseUrl}/api/tweet${query}`, {
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
                data.tweets.next_page_url === null
                    ? setHasMore(false)
                    : setNextPage(data.tweets.current_page + 1);
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
