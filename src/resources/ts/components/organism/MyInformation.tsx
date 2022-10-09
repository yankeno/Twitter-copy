import React from "react";
import { memo, FC } from "react";
import { ClosingAlert } from "../atoms/alert/ClosingAlert";

export const MyInformation: FC = memo(() => {
    return (
        <div className="w-[40%] max-w-[550px]">
            <ClosingAlert
                message="ツイートを送信しました。"
                color="blue"
                timeout={3}
            />
        </div>
    );
});
