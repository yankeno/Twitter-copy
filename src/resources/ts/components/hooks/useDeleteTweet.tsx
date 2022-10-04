import { useContext } from "react";

import { TweetLoadContext } from "../providers/TweetLoadProvider";

const baseUrl: string = import.meta.env.VITE_APP_URL;

export const useDeleteTweet = (tweetId: number) => {
    const { setIsLoaded } = useContext(TweetLoadContext);

    const deleteTweet = () => {
        fetch(`${baseUrl}/api/tweet/destroy?tweetId=${tweetId}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (!res.ok) {
                    alert("ツイートの削除に失敗しました。");
                    return;
                }
                alert("ツイートを削除しました。");
            })
            .finally(() => {
                setIsLoaded(false);
            });
    };
    return deleteTweet;
};
