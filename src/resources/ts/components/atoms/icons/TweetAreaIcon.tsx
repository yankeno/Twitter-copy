import React, { ReactNode } from "react";
import { memo, FC } from "react";

import { IconContext } from "react-icons";

type Props = {
    children: ReactNode;
};

export const TweetAreaIcon: FC<Props> = memo((props) => {
    const { children } = props;
    return (
        <IconContext.Provider value={{ size: "28px" }}>
            <div className="md:flex mx-2">{children}</div>
        </IconContext.Provider>
    );
});
