import React from "react";
import { memo, FC } from "react";

import { BiBadgeCheck } from "react-icons/bi";
import { IconContext } from "react-icons";

export const AuthorizedBadgeIcon: FC = memo(() => {
    return (
        <div>
            <IconContext.Provider value={{ size: "18px" }}>
                <BiBadgeCheck />
            </IconContext.Provider>
        </div>
    );
});
