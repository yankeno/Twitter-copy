import React from "react";
import { useNavigate } from "react-router-dom";

import { Tweet } from "../../types/api/tweet";
import { PostedTweetArea } from "../molecules/PostedTweetArea";
import { useResultTweet } from "./useResultTweet";

const baseUrl: string = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

export const useSearchTweets = () => {
    const { resultTweets, setResultTweets } = useResultTweet();
    let result: Array<JSX.Element>;
    const navigate = useNavigate();
    const onSubmitRegist = (searchWord: string) => {
        fetch(`${baseUrl}/api/tweet/search`, {
            method: "POST",
            body: JSON.stringify({
                searchWord: searchWord,
            }),
            headers: headers,
            credentials: "include",
        })
            .then((res) => {
                if (!res.ok) {
                    throw res;
                }
                return res.json();
            })
            .then((data) => {
                result = data.tweets.map((tweet: Tweet) => {
                    return (
                        <PostedTweetArea
                            key={tweet.id}
                            tweetId={tweet.id}
                            account={tweet.user.account}
                            userName={tweet.user.name}
                            isAuthAccount={tweet.user.authorized}
                            avatarUrl={tweet.user.avatar_url}
                            tweet={tweet.tweet}
                            isLiked={Boolean(tweet.likes)}
                            likes={tweet.likes}
                            retweets={tweet.retweets}
                            replies={tweet.replies}
                            createdAt={tweet.created_at}
                        />
                    );
                });
                setResultTweets(result);
            })
            .then(() => navigate("/explore"));
    };
    return onSubmitRegist;
};
