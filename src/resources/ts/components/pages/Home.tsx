import React from "react";
import { memo, FC } from "react";
import { ProfileAvatar } from "../atoms/picture/ProfileAvatar";
import { TweetTextArea } from "../atoms/input/TweetTextArea";
import { SideInfo } from "../organism/SideInfo";
import { SideMenu } from "../organism/SideMenu";
import { TweetArea } from "../molecules/TweetArea";
import { TimeLine } from "../organism/TimeLine";

export const Home: FC = memo(() => {
    return (
        <div className="flex justify-start">
            {/* <SideMenu />
            <TweetArea />
            <SideInfo /> */}
            <TimeLine />
        </div>
    );
});
