import React from "react";
import { memo, FC } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { PrimaryButton } from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

export const SecondaryProfileButton: FC = memo(() => {
    const navigate = useNavigate();
    const onClickProfile = () => {
        navigate("/profile");
    };

    return (
        <PrimaryButton onClick={onClickProfile}>
            <IconContext.Provider value={{ size: "28px" }}>
                <BsFillPersonFill
                    className={
                        location.pathname === "/profile" ? "stroke-1" : ""
                    }
                />
                <span className="mx-4">プロフィール</span>
            </IconContext.Provider>
        </PrimaryButton>
    );
});
