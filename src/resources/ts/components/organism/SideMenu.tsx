import React from "react";
import { memo, FC } from "react";
import { HomeButton } from "../atoms/buttons/HomeButton";
import { ExploreButton } from "../atoms/buttons/ExploreButton";
import { NotificationButton } from "../atoms/buttons/NotificationButton";
import { ProfileButton } from "../atoms/buttons/ProfileButton";
import { TweetButton } from "../atoms/buttons/TweetButton";

type Props = {
    url: string;
};

export const SideMenu: FC<Props> = memo((props) => {
    return (
        <>
            {" "}
            <HomeButton />
            <ExploreButton />
            <NotificationButton />
            <ProfileButton />
            <TweetButton />
        </>
    );
});
