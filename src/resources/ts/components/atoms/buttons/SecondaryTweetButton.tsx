import React from "react";
import { memo, FC, useContext } from "react";
import { TweetLoadContext } from "../../providers/TweetLoadProvider";

const baseUrl = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
};

export const SecondaryTweetButton: FC = memo(() => {
    const { setIsLoaded } = useContext(TweetLoadContext);
    const onClickSendTweet = () => {
        const tweet = document.getElementById("tweetArea") as HTMLInputElement;
        if (tweet.value.length > 140) {
            alert("ツイートは140以内で入力してください。");
            return;
        }
        if (tweet.value.length <= 0) {
            alert("ツイート内容を入力してください。");
            return;
        }

        const data = {
            userId: 1, // 一旦固定値で入れておく
            tweet: tweet.value,
        };

        fetch(`${baseUrl}/api/tweet/create`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (!res.ok) {
                    alert("ツイートの送信に失敗しました。");
                    return;
                }
                return res.json();
            })
            .then((data) => {
                if (data.message !== "successful") {
                    alert("ツイートの送信に失敗しました。");
                    return;
                }
                alert("ツイートを送信しました。");
                tweet.value = "";
            })
            .then(() => {
                setIsLoaded(false);
            });
    };
    return (
        <button
            className="bg-blue-400 hover:bg-blue-400/90 text-sm text-white py-2 px-4 mr-2 font-bold w-30 rounded-full flex"
            onClick={onClickSendTweet}
        >
            ツイートする
        </button>
    );
});
