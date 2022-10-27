import React from "react";
import { memo, FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const StaticButton: FC<Props> = memo((props) => {
    const { children } = props;
    return (
        <button className="bg-transparent hover:bg-neutral-200 text-neutral-700 text-black font-extrabold text-xl px-2 py-3 m-1 rounded-full flex items-center text-[#374151]">
            {children}
        </button>
    );
});
