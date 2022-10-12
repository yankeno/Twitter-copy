import React from "react";
import { memo, FC } from "react";
import { SideMenu } from "../organism/SideMenu";
import { SideInfo } from "../organism/SideInfo";
import { NotificationList } from "../organism/NotificationList";

export const Notification: FC = memo(() => {
    return (
        <div className="flex justify-start">
            <SideMenu />
            <NotificationList />
            <SideInfo />
        </div>
    );
});
