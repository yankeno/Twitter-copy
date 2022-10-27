import { toast } from "react-hot-toast";

const baseUrl: string = import.meta.env.VITE_APP_URL;
export const useEditTweet = () => {
    const editTweet = (
        tweetId: number,
        tweet?: string,
        likes?: number,
        retweets?: number,
        replies?: number
    ) => {
        const param: string | null = tweet
            ? `tweet=${tweet}`
            : likes
            ? `likes=${likes}`
            : retweets
            ? `retweets=${retweets}`
            : replies
            ? `replies=${replies}`
            : null;
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
                        return;
                    }
                    window.location.reload();
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
