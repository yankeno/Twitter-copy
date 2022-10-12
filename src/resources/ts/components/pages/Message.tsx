import React from "react";
import { memo, FC } from "react";
import { SideMenu } from "../organism/SideMenu";
import { SideInfo } from "../organism/SideInfo";
import { MessageList } from "../organism/MessaegList";

export const Message: FC = memo(() => {
    return (
        <div className="flex justify-start">
            <SideMenu />
            <MessageList />
            <SideInfo />
        </div>
    );
});
