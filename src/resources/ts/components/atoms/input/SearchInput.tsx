import React from "react";
import { memo, FC } from "react";

export const SearchInput: FC = memo(() => {
    return (
        <>
            <div className="relative">
                <input
                    type="text"
                    id="search-input"
                    className="rounded-full border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="キーワード検索"
                />
            </div>
        </>
    );
});
