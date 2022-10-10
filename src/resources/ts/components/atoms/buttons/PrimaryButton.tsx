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
            className="bg-transparent hover:bg-neutral-200 text-neutral-700 text-black font-extrabold text-xl py-3 px-4 mx-2 my-2 rounded-full flex items-center text-[#374151]"
            onClick={onClick}
        >
            {children}
        </button>
    );
});
