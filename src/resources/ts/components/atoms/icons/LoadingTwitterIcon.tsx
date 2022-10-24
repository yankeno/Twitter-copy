import React from "react";
import { memo, FC } from "react";

import { GrTwitter } from "react-icons/gr";
import { IconContext } from "react-icons";

export const LoadingTwitterIcon: FC = memo(() => {
    return (
        <IconContext.Provider value={{ size: "70px", color: "#60a5fa" }}>
            <div className="h-screen w-screen flex justify-center items-center">
                <GrTwitter />
            </div>
        </IconContext.Provider>
    );
});
