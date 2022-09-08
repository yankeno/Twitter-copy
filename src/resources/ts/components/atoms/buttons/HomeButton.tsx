import React from "react";
import { memo, FC } from "react";
import { HiHome } from "react-icons/hi";
import { IconContext } from "react-icons";
import { PrimaryButton } from "./PrimaryButton";

const onClickAlert = () => alert("home button");
export const HomeButton: FC = memo(() => {
    return (
        <PrimaryButton onClick={onClickAlert}>
            <IconContext.Provider value={{ size: "28px" }}>
                <HiHome />
                <span className="mx-4">ホーム</span>
            </IconContext.Provider>
        </PrimaryButton>
    );
});
