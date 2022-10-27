import React from "react";
import { memo, FC } from "react";

import { useLoginUser } from "../../hooks/useLoginUser";
import { AuthorizedBadgeIcon } from "../icons/AuthorizedBadgeIcon";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import { TweetEditIcon } from "../icons/TweetEditIcon";
import { StaticButton } from "./StaticButton";
import { useLogout } from "../../hooks/useLogout";

const limitWordCount = (word: string | undefined) => {
    if (!word) return word;
    return word.length <= 10 ? word : word.substring(0, 10) + "...";
};

export const SecondaryProfileButton: FC = memo(() => {
    const { loginUser } = useLoginUser();
    const onClickLogout = useLogout();

    return (
        <div>
            <StaticButton>
                <Menu
                    menuButton={
                        <MenuButton>
                            <div className="w-64 flex justify-start inline items-center">
                                <img
                                    src={loginUser?.avatar_url}
                                    className="avatar w-8 h-full rounded-full mx-1"
                                />
                                <div className="mx-1">
                                    <div className="flex justify-start inline items-center">
                                        <div className="text-gray-700 text-sm text-left">
                                            {limitWordCount(loginUser?.name)}
                                        </div>
                                        <div>
                                            {!loginUser?.authorized && (
                                                <AuthorizedBadgeIcon />
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-xs text-left font-normal text-gray-400">
                                        @{limitWordCount(loginUser?.account)}
                                    </div>
                                </div>
                                <div className="ml-auto mr-1">
                                    <TweetEditIcon />
                                </div>
                            </div>
                        </MenuButton>
                    }
                    transition
                >
                    <MenuItem onClick={onClickLogout}>
                        <div className="font-normal">ログアウト</div>
                    </MenuItem>
                </Menu>
            </StaticButton>
        </div>
    );
});
