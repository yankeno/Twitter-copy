import { useContext } from "react";

import { TweetLoadContext } from "../providers/TweetLoadProvider";
import { toast } from "react-hot-toast";

const baseUrl: string = import.meta.env.VITE_APP_URL;

export const useDeleteTweet = (tweetId: number) => {
    const { setIsLoaded } = useContext(TweetLoadContext);

    const deleteTweet = () => {
        toast.promise(
            fetch(`${baseUrl}/api/tweet/destroy?tweetId=${tweetId}`, {
                method: "DELETE",
            })
                .then((res) => {
                    if (!res.ok) {
                        return;
                    }
                })
                .finally(() => {
                    setIsLoaded(false);
                }),
            {
                loading: "削除中...",
                success: "ツイートを削除しました。",
                error: "ツイートの削除に失敗しました。",
            },
            {
                position: "bottom-center",
                success: {
                    icon: "🔥",
                },
            }
        );
    };
    return deleteTweet;
};