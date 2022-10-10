import React from "react";
import { memo, FC } from "react";
import { SearchInput } from "../atoms/input/SearchInput";
import { TrendContentsArea } from "../atoms/input/TrendContentsArea";

export const SideInfo: FC = memo(() => {
    return (
        <>
            <aside
                className="w-[30%] max-w-3xl h-screen sticky top-0 inline-block border-l px-4 mx-0  flex-grow"
                aria-label="Sidemenu"
            >
                <div className="max-w-sm">
                    <SearchInput />
                    <TrendContentsArea />
                </div>
            </aside>
        </>
    );
});
