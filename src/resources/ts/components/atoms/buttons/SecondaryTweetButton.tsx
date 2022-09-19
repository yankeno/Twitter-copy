import React from "react";
import { memo, FC } from "react";

const baseUrl = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
};
const onClickSendTweet = () => {
    const tweet = document.getElementById("tweetArea") as HTMLInputElement;
    if (tweet.value.length > 140) {
        alert("ツイートは140以内で入力してください。");
        return;
    }
    if (tweet.value.length <= 0) {
        alert("ツイート内容を入力してください。");
    }

    const data = {
        tweet: tweet.value,
        userId: 8, // 一旦固定値で入れておく
    };

    fetch(`${baseUrl}/api/tweet/create`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
    }).then((res) => {
        if (!res.ok) {
            alert("ツイートの送信に失敗しました。");
            return;
        }
        alert("ツイートを送信しました。");
        tweet.value = "";
    });
};

export const SecondaryTweetButton: FC = memo(() => {
    return (
        <button
            className="bg-blue-400 hover:bg-blue-400/90 text-sm text-white py-2 px-4 mr-2 font-bold w-30 rounded-full flex"
            onClick={onClickSendTweet}
        >
            ツイートする
        </button>
    );
});
