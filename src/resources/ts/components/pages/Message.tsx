import React from "react";
import { memo, FC } from "react";
import { TweetLoadedProvider } from "../providers/TweetLoadProvider";
import { SideMenu } from "../organism/SideMenu";
import { SideInfo } from "../organism/SideInfo";
import { MessageList } from "../organism/MessaegList";

export const Message: FC = memo(() => {
    return (
        <div className="flex justify-start">
            <TweetLoadedProvider>
                <SideMenu />
                <MessageList />
                <SideInfo />
            </TweetLoadedProvider>
        </div>
    );
});
