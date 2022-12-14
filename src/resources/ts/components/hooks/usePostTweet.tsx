import React, { Dispatch, SetStateAction } from "react";
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
    const { loginUser } = useLoginUser();
    const { tweets, setTweets } = useTweet();
    const onClickSendTweet = (
        text: string,
        setText: Dispatch<SetStateAction<string>>
    ): void => {
        if (text.length > 140) {
            toast.error("ツイートは140以内で入力してください。");
            return;
        }
        if (text.length <= 0) {
            toast.error("ツイート内容を入力してください。");
            return;
        }

        const data = {
            userId: loginUser?.id, // 一旦固定値で入れておく
            tweet: text,
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
                        throw new Error();
                    }
                    const created: Tweet = data.tweet;
                    setTweets([
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
                        ...tweets,
                    ]);
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
        setText("");
    };
    return onClickSendTweet;
};
