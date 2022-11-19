import React from "react";
import { memo, FC } from "react";

import { SideInfo } from "../organism/SideInfo";
import { SideMenu } from "../organism/SideMenu";
import { TimeLine } from "../organism/TimeLine";

export const Home: FC = memo(() => {
    return (
        <div className="flex justify-start">
            <SideMenu />
            <TimeLine />
            <SideInfo />
        </div>
    );
});
