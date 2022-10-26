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
            className="bg-blue-400 hover:bg-blue-400/90 text-white font-semibold py-4 px-16 mx-2 my-8 w-50 rounded-full flex"
            onClick={onClick}
        >
            {children}
        </button>
    );
});
