import React from "react";
import { memo, FC } from "react";

import { BsTwitter } from "react-icons/bs";
import { IconContext } from "react-icons";

export const LoginPageIcon: FC = memo(() => {
    return (
        <IconContext.Provider value={{ size: "36px", color: "#60a5fa" }}>
            <BsTwitter />
        </IconContext.Provider>
    );
});
