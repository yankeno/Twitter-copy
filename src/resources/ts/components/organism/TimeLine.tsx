import React from "react";
import { memo, FC } from "react";

/**
 * 型定義ファイルを別途インストールする必要があるパッケージが存在する。
 * TypeSearch(https://www.typescriptlang.org/dt/search?search=) にて
 * 各パッケージの型定義ファイルが一元管理されている。
 */
import InfiniteScroll from "react-infinite-scroller";

import { TweetArea } from "../molecules/TweetArea";
import { TweetLoadingSpinner } from "../atoms/spinner/TweetLoadingSpinner";
import { useFetchTweets } from "../hooks/useFetchTweets";
import { Toaster } from "react-hot-toast";

export const TimeLine: FC = memo(() => {
    const { tweets, hasMore, fetchTweets } = useFetchTweets();
    const loading = (
        <div className="flex justify-center my-8">
            <TweetLoadingSpinner key={0} />
        </div>
    );
    return (
        <>
            <div className="w-[40%] max-w-[600px] mx-0  flex-grow">
                <TweetArea />
                <InfiniteScroll
                    loadMore={fetchTweets}
                    hasMore={hasMore}
                    loader={loading}
                >
                    {tweets}
                </InfiniteScroll>
            </div>
            <Toaster />
        </>
    );
});
