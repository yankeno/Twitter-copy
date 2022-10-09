import React from "react";
import { memo, FC } from "react";
import { TweetLoadedProvider } from "../providers/TweetLoadProvider";
import { SideMenu } from "../organism/SideMenu";
import { SideInfo } from "../organism/SideInfo";
import { TweetSearch } from "../organism/TweetSearch";

export const Explore: FC = memo(() => {
    return (
        <div className="flex justify-start">
            <TweetLoadedProvider>
                <SideMenu />
                <TweetSearch />
                <SideInfo />
            </TweetLoadedProvider>
        </div>
    );
});
