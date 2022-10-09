import React from "react";
import { memo, FC } from "react";

import { PostedTweetArea } from "../molecules/PostedTweetArea";
import { TweetArea } from "../molecules/TweetArea";
import { TweetLoadingSpinner } from "../atoms/spinner/TweetLoadingSpinner";
import { useFetchTweets } from "../hooks/useFetchTweets";

export const TimeLine: FC = memo(() => {
    const { tweets, isLoaded } = useFetchTweets();
    return (
        <>
            {/* {" "} */}
            <div className="w-[40%] max-w-[550px]">
                <TweetArea />
                {isLoaded ? (
                    tweets.map((tweet) => {
                        return (
                            <PostedTweetArea
                                key={tweet.id}
                                tweetId={tweet.id}
                                account={tweet.user.account}
                                userName={tweet.user.name}
                                isAuthAccount={tweet.user.authorized}
                                avatarUrl={tweet.user.avatar_url}
                                tweet={tweet.tweet}
                                isLiked={false}
                                likes={tweet.likes}
                                retweets={tweet.retweets}
                                replies={tweet.replies}
                                createdAt={tweet.created_at}
                            />
                        );
                    })
                ) : (
                    <div className="flex justify-center my-2">
                        <TweetLoadingSpinner />
                    </div>
                )}
            </div>
        </>
    );
});
