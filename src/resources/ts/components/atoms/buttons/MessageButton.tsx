import React from "react";
import { memo, FC } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { PrimaryButton } from "./PrimaryButton";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

export const MessageButton: FC = memo(() => {
    const navigate = useNavigate();
    const onClickMesasge = () => {
        navigate("/message");
    };
    return (
        <PrimaryButton onClick={onClickMesasge}>
            <IconContext.Provider value={{ size: "28px" }}>
                <AiOutlineMail />
                <span className="mx-4">メッセージ</span>
            </IconContext.Provider>
        </PrimaryButton>
    );
});
