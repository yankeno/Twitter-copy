import React from "react";
import { memo, FC } from "react";
import { TweetLoadedProvider } from "../providers/TweetLoadProvider";
import { SideMenu } from "../organism/SideMenu";
import { SideInfo } from "../organism/SideInfo";
import { NotificationList } from "../organism/NotificationList";

export const Notification: FC = memo(() => {
    return (
        <div className="flex justify-start">
            <TweetLoadedProvider>
                <SideMenu />
                <NotificationList />
                <SideInfo />
            </TweetLoadedProvider>
        </div>
    );
});
