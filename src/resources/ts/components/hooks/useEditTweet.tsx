import { useContext } from "react";

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
        fetch(`${baseUrl}/api/tweet/update?tweetId=${tweetId}` + `&${param}`, {
            method: "PUT",
        })
            .then((res) => {
                if (!res.ok && tweet) {
                    alert("ツイートの更新に失敗しました。");
                    return;
                }
            })
            .finally(() => {
                setIsLoaded(false);
            });
    };
    return editTweet;
};
