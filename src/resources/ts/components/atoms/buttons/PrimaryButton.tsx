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
            className="bg-blue-400 hover:bg-blue-400/90 text-white font-bold py-3 px-6 rounded-full flex"
            onClick={onClick}
        >
            {children}
        </button>
    );
});
