import React from "react";
import { memo, FC } from "react";

export const NewsContent: FC = memo(() => {
    return (
        <div className="text-gray-500 font-bold">
            <a href="#" className="block">
                テスト
            </a>
        </div>
    );
});
