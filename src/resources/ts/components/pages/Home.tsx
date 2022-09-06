import React from "react";
import { memo, FC } from "react";
import { ProfileAvatar } from "../atoms/picture/ProfileAvatar";
import { TweetArea } from "../atoms/textareas/TweetArea";
import { SideMenu } from "../organism/SideMenu";

export const Home: FC = memo(() => {
    return (
        <>
            <SideMenu />
        </>
    );
});
