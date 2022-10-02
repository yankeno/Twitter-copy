import React from "react";
import { memo, FC } from "react";

import { SideInfo } from "../organism/SideInfo";
import { SideMenu } from "../organism/SideMenu";
import { TimeLine } from "../organism/TimeLine";
import { TweetLoadedProvider } from "../providers/TweetLoadProvider";

export const Home: FC = memo(() => {
    return (
        <div className="flex justify-start">
            <TweetLoadedProvider>
                <SideMenu />
                <TimeLine />
                <SideInfo />
            </TweetLoadedProvider>
        </div>
    );
});
