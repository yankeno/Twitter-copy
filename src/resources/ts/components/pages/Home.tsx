import React from "react";
import { memo, FC } from "react";
import { ProfileAvatar } from "../atoms/picture/ProfileAvatar";
import { TweetTextArea } from "../atoms/textareas/TweetTextArea";
import { SideMenu } from "../organism/SideMenu";
import { TweetArea } from "../organism/TweetArea";

export const Home: FC = memo(() => {
    return (
        <>
            {/* <SideMenu /> */}
            <TweetArea />
        </>
    );
});
