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
    const [nextPage, setNextPage] = useState<number>(1);
    const { tweets, setTweets } = useTweet();

    const fetchTweets = () => {
        if (!hasMore) return;
        query = "?page=" + nextPage;

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
                data.tweets.next_page_url === null
                    ? setHasMore(false)
                    : setNextPage(data.tweets.current_page + 1);
                /**
                 * @TODO tweet を編集、削除したときに画面をリロードするのではなく、
                 * 対象の要素自体を編集、削除するように変更する
                 * -> tweets を JSX.Element の配列ではなく Tweet の配列に変える
                 * -> JSX.Element のままでもできるか？できるならばそのままの作りで対応する
                 */
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
