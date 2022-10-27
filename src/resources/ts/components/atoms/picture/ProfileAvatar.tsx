import React from "react";
import { memo, FC } from "react";

type Props = {
    url: string;
};

export const ProfileAvatar: FC<Props> = memo((props) => {
    const { url } = props;
    return (
        <div>
            <img src={url} className="avatar w-14 rounded-full" />
        </div>
    );
});
