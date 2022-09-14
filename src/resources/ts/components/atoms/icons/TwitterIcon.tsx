import React from "react";
import { memo, FC } from "react";

import { IconContext } from "react-icons";
import { VscTwitter } from "react-icons/vsc";

const onClickAlert = () => alert("Twitter icon");
export const TwitterIcon: FC = memo(() => {
    return (
        <div className="rounded-full w-30">
            <IconContext.Provider value={{ size: "28px", color: "#374151" }}>
                <VscTwitter
                    className="mx-6 my-6 cursor-pointer hover:bg-neutral-200 rounded-full"
                    onClick={onClickAlert}
                />
            </IconContext.Provider>
        </div>
    );
});
