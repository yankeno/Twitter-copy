import React from "react";
import { memo, FC } from "react";

import { IconContext } from "react-icons";
import { VscTwitter } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export const TwitterIcon: FC = memo(() => {
    const navigate = useNavigate();
    const onClickHome = () => {
        navigate("/home");
    };
    return (
        <div className="rounded-full w-30">
            <IconContext.Provider value={{ size: "28px", color: "#374151" }}>
                <VscTwitter
                    className="mx-6 my-6 cursor-pointer hover:bg-neutral-200 rounded-full"
                    onClick={onClickHome}
                />
            </IconContext.Provider>
        </div>
    );
});
