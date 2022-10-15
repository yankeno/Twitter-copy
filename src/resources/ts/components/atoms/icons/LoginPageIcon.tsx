import React from "react";
import { memo, FC } from "react";

import { BsTwitter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";

export const LoginPageIcon: FC = memo(() => {
    const navigate = useNavigate();
    const onClickHome = () => {
        navigate("/home");
    };
    return (
        <IconContext.Provider value={{ size: "36px", color: "#60a5fa" }}>
            <BsTwitter
                className="cursor-pointer hover:fill-blue-300"
                onClick={onClickHome}
            />
        </IconContext.Provider>
    );
});
