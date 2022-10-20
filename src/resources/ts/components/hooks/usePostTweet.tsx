import { toast } from "react-hot-toast";

const baseUrl = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
};

export const usePostTweet = () => {
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
            userId: 1, // 一旦固定値で入れておく
            tweet: tweet.value,
        };

        toast.promise(
            fetch(`${baseUrl}/api/tweet/create`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
                .then((res) => {
                    console.log(res);

                    if (!res.ok) {
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
