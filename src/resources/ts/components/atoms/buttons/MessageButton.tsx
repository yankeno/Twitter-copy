import React from "react";
import { memo, FC } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { PrimaryButton } from "./PrimaryButton";
import { IconContext } from "react-icons";

const onClickAlert = () => alert("message button");
export const MessageButton: FC = memo(() => {
    return (
        <PrimaryButton onClick={onClickAlert}>
            <IconContext.Provider value={{ size: "28px" }}>
                <AiOutlineMail />
                <span className="mx-4">メッセージ</span>
            </IconContext.Provider>
        </PrimaryButton>
    );
});
