import React from "react";
import { memo, FC } from "react";
import { SearchInput } from "../atoms/input/SearchInput";
import { TrendContentsArea } from "../atoms/input/TrendContentsArea";

export const SideInfo: FC = memo(() => {
    return (
        <>
            <aside
                className="h-screen sticky top-0 inline-block border-l"
                aria-label="Sidemenu"
            >
                <SearchInput />
                <TrendContentsArea />
            </aside>
        </>
    );
});
