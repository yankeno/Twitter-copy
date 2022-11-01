import { Ref } from "react";
import { toast } from "react-hot-toast";

const baseUrl: string = import.meta.env.VITE_APP_URL;
export const useEditTweet = () => {
    const editTweet = (
        tweetId: number,
        tweetText: Ref<HTMLDivElement>,
        tweet?: string
    ) => {
        if (!tweet) {
            toast.error("ツイートを入力してください");
            return;
        }
        const param: string = `tweet=${tweet}`;
        toast.promise(
            fetch(
                `${baseUrl}/api/tweet/update?tweetId=${tweetId}` + `&${param}`,
                {
                    method: "PUT",
                }
            )
                .then((res) => {
                    if (!res.ok && tweet) {
                        return;
                    }
                    return res.json();
                })
                .then((data) => {
                    if (data.message !== "successful") {
                        throw new Error();
                    }
                    // window.location.reload();
                    tweetText!.current = data.tweet.tweet;
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
