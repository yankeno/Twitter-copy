import React from "react";
import { memo, FC } from "react";
import { NewsContent } from "../../molecules/NewsContent";

export const TrendContentsArea: FC = memo(() => {
    return (
        /**
         * border-radius からはみ出た部分を表示しない場合は
         * overflow-hidden を使う
         */
        <div className="w-96 m-4 bg-stone-200 rounded-xl overflow-hidden border border-gray-200">
            <h5 className="px-4 pt-4 mb-2 text-xl font-bold tracking-tight text-gray-500">
                いまどうしてる？
            </h5>
            <NewsContent />
        </div>
    );
});
