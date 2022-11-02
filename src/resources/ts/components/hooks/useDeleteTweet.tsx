import { toast } from "react-hot-toast";
import { useTweet } from "./useTweet";

const baseUrl: string = import.meta.env.VITE_APP_URL;

export const useDeleteTweet = () => {
    const { tweets, setTweets } = useTweet();
    const deleteTweet = (tweetId: number): void => {
        toast.promise(
            fetch(`${baseUrl}/api/tweet/destroy?tweetId=${tweetId}`, {
                method: "DELETE",
            })
                .then((res) => {
                    if (!res.ok) {
                        return;
                    }
                    return res.json();
                })
                .then((data) => {
                    setTweets(
                        tweets.filter((tweet) => {
                            return tweet.key !== String(tweetId);
                        })
                    );
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
    return { deleteTweet };
};
