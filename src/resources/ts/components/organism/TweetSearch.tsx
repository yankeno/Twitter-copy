import React, { ChangeEvent } from "react";
import { memo, FC } from "react";

import { SearchInput } from "../atoms/input/SearchInput";
import { useResultTweet } from "../hooks/useResultTweet";

type Tab = "trend" | "latest" | "accounts" | "images" | "movies";

export const TweetSearch: FC = memo(() => {
    const { resultTweets } = useResultTweet();
    const onChangeTab = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.id);
    };

    return (
        <div className="w-[40%] max-w-[600px]">
            <div className="">
                <div className="w-5/6 m-auto">
                    <SearchInput />
                </div>
                <div className="bg-white text-gray-600">
                    <div>
                        <div className="block flex justify-between list-none">
                            <div className="mt-4">
                                <input
                                    type="radio"
                                    id="trend-btn"
                                    name="tab"
                                    className="peer hidden"
                                    onChange={onChangeTab}
                                    defaultChecked
                                />
                                <label
                                    id="trend-list"
                                    htmlFor="trend-btn"
                                    className="p-6 text-center cursor-pointer peer-checked:text-blue-500 peer-checked:border-b-2 peer-checked:font-medium peer-checked:border-blue-500"
                                >
                                    話題のツイート
                                </label>
                            </div>
                            <div className="mt-4">
                                <input
                                    type="radio"
                                    id="latest-btn"
                                    name="tab"
                                    className="peer hidden"
                                />
                                <label
                                    id="latest-list"
                                    htmlFor="latest-btn"
                                    className="p-6 text-center cursor-pointer peer-checked:text-blue-500 peer-checked:border-b-2 peer-checked:font-medium peer-checked:border-blue-500"
                                >
                                    最新
                                </label>
                            </div>
                            <div className="mt-4">
                                <input
                                    type="radio"
                                    id="accounts-btn"
                                    name="tab"
                                    className="peer hidden"
                                />
                                <label
                                    id="accounts-list"
                                    htmlFor="accounts-btn"
                                    className="p-6 text-center cursor-pointer peer-checked:text-blue-500 peer-checked:border-b-2 peer-checked:font-medium peer-checked:border-blue-500"
                                >
                                    アカウント
                                </label>
                            </div>
                            <div className="mt-4">
                                <input
                                    type="radio"
                                    id="images-btn"
                                    name="tab"
                                    className="peer hidden"
                                />
                                <label
                                    id="images-list"
                                    htmlFor="images-btn"
                                    className="p-6 text-center cursor-pointer peer-checked:text-blue-500 peer-checked:border-b-2 peer-checked:font-medium peer-checked:border-blue-500"
                                >
                                    画像
                                </label>
                            </div>
                            <div className="mt-4">
                                <input
                                    type="radio"
                                    id="movies-btn"
                                    name="tab"
                                    className="peer hidden"
                                />
                                <label
                                    id="movies-list"
                                    htmlFor="movies-btn"
                                    className="p-6 text-center cursor-pointer peer-checked:text-blue-500 peer-checked:border-b-2 peer-checked:font-medium peer-checked:border-blue-500"
                                >
                                    動画
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">{resultTweets}</div>
        </div>
    );
});
