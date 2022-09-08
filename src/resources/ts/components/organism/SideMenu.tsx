import React from "react";
import { memo, FC } from "react";
import { HomeButton } from "../atoms/buttons/HomeButton";
import { ExploreButton } from "../atoms/buttons/ExploreButton";
import { NotificationButton } from "../atoms/buttons/NotificationButton";
import { ProfileButton } from "../atoms/buttons/ProfileButton";
import { TweetButton } from "../atoms/buttons/PrimaryTweetButton";
import { TwitterIcon } from "../atoms/icons/TwitterIcon";
import { MessageButton } from "../atoms/buttons/MessageButton";

export const SideMenu: FC = memo(() => {
    return (
        <>
            <aside
                className="w-96 pl-20 h-screen sticky top-0 inline-block"
                aria-label="Sidebar"
            >
                <div className="overflow-y-auto py-2 px-2">
                    <ul className="space-y-2">
                        <li>
                            <TwitterIcon />
                        </li>
                        <li>
                            <HomeButton />
                        </li>
                        <li>
                            <ExploreButton />
                        </li>
                        <li>
                            <NotificationButton />
                        </li>
                        <li>
                            <MessageButton />
                        </li>
                        <li>
                            <ProfileButton />
                        </li>
                        <li>
                            <TweetButton />
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
});
