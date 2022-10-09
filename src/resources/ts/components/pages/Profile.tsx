import React from "react";
import { memo, FC } from "react";
import { MyInformation } from "../organism/MyInformation";
import { TweetLoadedProvider } from "../providers/TweetLoadProvider";
import { SideMenu } from "../organism/SideMenu";
import { SideInfo } from "../organism/SideInfo";

export const Profile: FC = memo(() => {
    return (
        <div className="flex justify-start">
            <TweetLoadedProvider>
                <SideMenu />
                <MyInformation />
                <SideInfo />
            </TweetLoadedProvider>
        </div>
    );
});
