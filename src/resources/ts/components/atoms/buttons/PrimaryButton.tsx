import React from "react";
import { memo, FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
    onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
    const { children, onClick } = props;
    return (
        <button
            className="bg-transparent hover:bg-transparent-400/90 text-black font-bold py-3 px-6 mx-2 my-2 rounded-full flex"
            onClick={onClick}
        >
            {children}
        </button>
    );
});