import React from "react";
import { memo, FC } from "react";
import { SearchInput } from "../atoms/input/SearchInput";

export const SideInfo: FC = memo(() => {
    return (
        <>
            <SearchInput />
        </>
    );
});
