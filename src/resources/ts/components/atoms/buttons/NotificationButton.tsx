import React from "react";
import { memo, FC } from "react";
import { BiBell } from "react-icons/bi";
import { IconContext } from "react-icons";
import { PrimaryButton } from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

export const NotificationButton: FC = memo(() => {
    const navigate = useNavigate();
    const onClickNotification = () => {
        navigate("/notification");
    };
    return (
        <PrimaryButton onClick={onClickNotification}>
            <IconContext.Provider value={{ size: "28px" }}>
                <BiBell
                    className={
                        location.pathname === "/notification" ? "stroke-1" : ""
                    }
                />
                <span className="mx-4">通知</span>
            </IconContext.Provider>
        </PrimaryButton>
    );
});
