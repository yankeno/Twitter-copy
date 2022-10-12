import React from "react";
import { memo, FC } from "react";
import { MyInformation } from "../organism/MyInformation";
import { SideMenu } from "../organism/SideMenu";
import { SideInfo } from "../organism/SideInfo";

export const Profile: FC = memo(() => {
    return (
        <div className="flex justify-start">
            <SideMenu />
            <MyInformation />
            <SideInfo />
        </div>
    );
});
