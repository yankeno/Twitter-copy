import React from "react";
import { memo, FC } from "react";
import { BiBell } from "react-icons/bi";
import { IconContext } from "react-icons";
import { PrimaryButton } from "./PrimaryButton";

const onClickAlert = () => alert("notification button");
export const NotificationButton: FC = memo(() => {
    return (
        <PrimaryButton onClick={onClickAlert}>
            <IconContext.Provider value={{ size: "20px" }}>
                <BiBell />
                &nbsp;通知
            </IconContext.Provider>
        </PrimaryButton>
    );
});
