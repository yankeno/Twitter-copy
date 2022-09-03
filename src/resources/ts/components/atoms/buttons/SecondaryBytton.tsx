import React from "react";
import { memo, FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
    onClick: () => void;
};

export const SecondaryButton: FC<Props> = memo((props) => {
    const { children, onClick } = props;
    return (
        <button
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex"
            onClick={onClick}
        >
            {children}
        </button>
    );
});
