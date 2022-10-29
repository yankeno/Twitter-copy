import React from "react";
import { memo, FC } from "react";

import { HomeButton } from "../atoms/buttons/HomeButton";
import { ExploreButton } from "../atoms/buttons/ExploreButton";
import { NotificationButton } from "../atoms/buttons/NotificationButton";
import { PrimaryProfileButton } from "../atoms/buttons/PrimaryProfileButton";
import { PrimaryTweetButton } from "../atoms/buttons/PrimaryTweetButton";
import { TwitterIcon } from "../atoms/icons/TwitterIcon";
import { MessageButton } from "../atoms/buttons/MessageButton";
import { SecondaryProfileButton } from "../atoms/buttons/SecondaryProfileButton";

export const SideMenu: FC = memo(() => {
    return (
        <>
            <aside
                className="w-[30%] max-w-3xl mx-0 h-screen sticky top-0 inline-block border-r flex-grow"
                aria-label="Sidemenu"
            >
                <div className="h-full py-4 px-4 flex float-right">
                    <div>
                        <TwitterIcon />
                        <HomeButton />
                        <ExploreButton />
                        <NotificationButton />
                        <MessageButton />
                        <PrimaryProfileButton />
                        <PrimaryTweetButton />
                        <div className="absolute bottom-4 right-2">
                            <SecondaryProfileButton />
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
});
