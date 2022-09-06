import React from "react";
import { memo, FC } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { PrimaryButton } from "./PrimaryButton";

const onClickAlert = () => alert("profile button");
export const ProfileButton: FC = memo(() => {
    return (
        <PrimaryButton onClick={onClickAlert}>
            <IconContext.Provider value={{ size: "20px" }}>
                <BsPersonCircle />
                &nbsp;プロフィール
            </IconContext.Provider>
        </PrimaryButton>
    );
});