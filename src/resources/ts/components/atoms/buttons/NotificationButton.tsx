import React from "react";
import { memo, FC } from "react";
import { BiBell } from "react-icons/bi";
import { IconContext } from "react-icons";
import { PrimaryButton } from "./PrimaryButton";

const onClickAlert = () => alert("notification button");
export const NotificationButton: FC = memo(() => {
    return (
        <PrimaryButton onClick={onClickAlert}>
            <IconContext.Provider value={{ size: "28px" }}>
                <BiBell />
                <span className="mx-4">通知</span>
            </IconContext.Provider>
        </PrimaryButton>
    );
});
