import { useContext, useEffect } from "react";

import { Tweet } from "../../types/api/tweet";
import { TweetLoadContext } from "../providers/TweetLoadProvider";

const baseUrl: string = import.meta.env.VITE_APP_URL;
let tweets: Array<Tweet>;

export const useFetchTweets = () => {
    const { isLoaded, setIsLoaded } = useContext(TweetLoadContext);

    const fetchTweets = () => {
        fetch(`${baseUrl}/api/tweet`, {
            method: "GET",
        })
            .then((res) => {
                if (!res.ok) {
                    alert("ツイートの取得に失敗しました。");
                    return;
                }
                return res.json();
            })
            .then((data) => {
                if (data.message !== "successful") {
                    alert("ツイートの取得に失敗しました。");
                    return;
                }
                tweets = data.tweets;
            })
            .finally(() => {
                setIsLoaded(true);
            });
    };

    useEffect(() => {
        fetchTweets();
    }, [isLoaded]);

    return { tweets, isLoaded };
};
