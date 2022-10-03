import React, { ReactNode } from "react";
import { memo, FC } from "react";

import { IconContext } from "react-icons";

type Props = {
    children: ReactNode;
};

export const PostedAreaIcon: FC<Props> = memo((props) => {
    const { children } = props;
    return (
        <IconContext.Provider value={{ size: "16px" }}>
            <div className="md:flex mx-2 h-6 hover:opacity-75 cursor-pointer">
                {children}
            </div>
        </IconContext.Provider>
    );
});
