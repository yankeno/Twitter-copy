import React from "react";
import { memo, FC } from "react";
import { HiHome } from "react-icons/hi";
import { IconContext } from "react-icons";
import { PrimaryButton } from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

export const HomeButton: FC = memo(() => {
    const navigate = useNavigate();
    const onClickHome = () => {
        navigate("/home");
    };
    return (
        <PrimaryButton onClick={onClickHome}>
            <IconContext.Provider value={{ size: "28px" }}>
                <HiHome />
                <span className="mx-4">ホーム</span>
            </IconContext.Provider>
        </PrimaryButton>
    );
});
