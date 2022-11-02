import React from "react";
import { toast } from "react-hot-toast";
import { Tweet } from "../../types/api/tweet";

import { PostedTweetArea } from "../molecules/PostedTweetArea";
import { useLoginUser } from "./useLoginUser";
import { useTweet } from "./useTweet";

const baseUrl = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
};

export const usePostTweet = () => {
    const { loginUser, setLoginUser } = useLoginUser();
    const { tweets, setTweets } = useTweet();
    const onClickSendTweet = (elemId: string): void => {
        const tweet = document.getElementById(elemId) as HTMLInputElement;
        if (tweet.value.length > 140) {
            toast.error("ツイートは140以内で入力してください。");
            return;
        }
        if (tweet.value.length <= 0) {
            toast.error("ツイート内容を入力してください。");
            return;
        }

        const data = {
            userId: loginUser?.id, // 一旦固定値で入れておく
            tweet: tweet.value,
        };

        toast.promise(
            fetch(`${baseUrl}/api/tweet/create`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((res) => {
                    if (!res.ok) {
                        return;
                    }
                    return res.json();
                })
                .then((data) => {
                    if (data.message !== "successful") {
                        return;
                    }

                    // window.location.reload();
                    const created: Tweet = data.tweet;
                    console.log(created);

                    setTweets([
                        ...tweets,
                        <PostedTweetArea
                            key={created.id}
                            tweetId={created.id}
                            account={created.user.account}
                            userName={created.user.name}
                            isAuthAccount={created.user.authorized}
                            avatarUrl={created.user.avatar_url}
                            tweet={created.tweet}
                            isLiked={Boolean(created.likes)}
                            likes={created.likes}
                            retweets={created.retweets}
                            replies={created.replies}
                            createdAt={created.created_at}
                        />,
                    ]);

                    // setTweets([...tweets, ...list]);
                }),
            {
                loading: "送信中...",
                success: "ツイートを送信しました。",
                error: "ツイートの送信に失敗しました。",
            },
            {
                position: "bottom-center",
            }
        );
    };
    return onClickSendTweet;
};
