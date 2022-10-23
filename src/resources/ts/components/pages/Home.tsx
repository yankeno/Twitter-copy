import React from "react";
import { memo, FC } from "react";

import { SideInfo } from "../organism/SideInfo";
import { SideMenu } from "../organism/SideMenu";
import { TimeLine } from "../organism/TimeLine";
import { useLoginUser } from "../hooks/useLoginUser";

export const Home: FC = memo(() => {
    const { loginUser } = useLoginUser();
    console.log(loginUser);

    return (
        <div className="flex justify-start">
            <SideMenu />
            <TimeLine />
            <SideInfo />
        </div>
    );
});
