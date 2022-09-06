import React from "react";
import { memo, FC } from "react";

type Props = {
    url: string;
};

export const ProfileAvatar: FC<Props> = memo((props) => {
    const { url } = props;
    return (
        <div className="avatar">
            <div className="w-14">
                <img src={url} className="rounded-full" />
            </div>
        </div>
    );
});
