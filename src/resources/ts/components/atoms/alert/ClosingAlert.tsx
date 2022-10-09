import React from "react";
import { memo, FC, useState } from "react";

type Props = {
    message: string;
    color: string;
    timeout: number;
};

export const ClosingAlert: FC<Props> = memo((props) => {
    const { message, color, timeout } = props;
    const [showAlert, setShowAlert] = useState<boolean>(true);
    return (
        <>
            {showAlert && (
                <div
                    className={
                        "text-white text-center w-fit px-2 py-2 border-0 rounded relative left-1/2 bottom-0 -translate-x-1/2 my-4 bg-" +
                        color +
                        "-400"
                    }
                >
                    <span className="inline-block align-middle mx-6">
                        {message}
                    </span>
                    <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-2 mr-3 outline-none focus:outline-none"
                        onClick={() => setShowAlert(false)}
                    >
                        <span>×</span>
                    </button>
                </div>
            )}
        </>
    );
});
