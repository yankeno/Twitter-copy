import React from "react";
import { memo, FC } from "react";
import { NewsContent } from "../../molecules/NewsContent";

export const TrendContentsArea: FC = memo(() => {
    return (
        <div className="w-96 bg-stone-200 rounded-lg border border-gray-200">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-500">
                いまどうしてる？
            </h5>
            <NewsContent />
        </div>
    );
});
