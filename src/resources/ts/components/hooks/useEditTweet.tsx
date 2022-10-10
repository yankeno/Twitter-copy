import { useContext } from "react";
import { toast } from "react-hot-toast";

import { TweetLoadContext } from "../providers/TweetLoadProvider";

const baseUrl: string = import.meta.env.VITE_APP_URL;

export const useEditTweet = (
    tweetId: number,
    tweet?: string,
    likes?: number,
    retweets?: number,
    replies?: number
) => {
    const { setIsLoaded } = useContext(TweetLoadContext);
    const param: string | null = tweet
        ? `tweet=${tweet}`
        : likes
        ? `likes=${likes}`
        : retweets
        ? `retweets=${retweets}`
        : replies
        ? `replies=${replies}`
        : null;

    if (param === null) {
        alert("パラメータが不正です。");
        return;
    }

    const editTweet = () => {
        toast.promise(
            fetch(
                `${baseUrl}/api/tweet/update?tweetId=${tweetId}` + `&${param}`,
                {
                    method: "PUT",
                }
            )
                .then((res) => {
                    if (!res.ok && tweet) {
                        // alert("ツイートの更新に失敗しました。");
                        return;
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data);

                    if (data.message !== "successful") {
                        alert(data.message.tweet);
                        return;
                    }
                })
                .finally(() => {
                    setIsLoaded(false);
                }),
            {
                loading: "送信中...",
                success: "ツイートを編集しました。",
                error: "ツイートの編集に失敗しました",
            },
            {
                position: "bottom-center",
            }
        );
    };
    return editTweet;
};
