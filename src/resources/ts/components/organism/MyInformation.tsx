import React from "react";
import { memo, FC } from "react";
import { toast, Toaster } from "react-hot-toast";
import { ClosingAlert } from "../atoms/alert/ClosingAlert";

const onClickToast = () => {
    console.log("onClick");
    toast.success("ツイートを送信しました。", {
        position: "bottom-center",
    });
};

export const MyInformation: FC = memo(() => {
    return (
        <div className="w-[40%] max-w-[600px]">
            <button type="button" onClick={onClickToast}>
                送信
            </button>
            <Toaster />
        </div>
    );
});
