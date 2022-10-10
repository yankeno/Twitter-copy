import React from "react";
import { memo, FC } from "react";
import { HomeButton } from "../atoms/buttons/HomeButton";
import { ExploreButton } from "../atoms/buttons/ExploreButton";
import { NotificationButton } from "../atoms/buttons/NotificationButton";
import { ProfileButton } from "../atoms/buttons/ProfileButton";
import { PrimaryTweetButton } from "../atoms/buttons/PrimaryTweetButton";
import { TwitterIcon } from "../atoms/icons/TwitterIcon";
import { MessageButton } from "../atoms/buttons/MessageButton";

export const SideMenu: FC = memo(() => {
    return (
        <>
            <aside
                className="w-[30%] max-w-3xl mx-0 h-screen sticky top-0 inline-block border-r flex-grow"
                aria-label="Sidemenu"
            >
                <div className="overflow-y-auto py-4 px-4 flex float-right">
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
                            <PrimaryTweetButton />
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
});
