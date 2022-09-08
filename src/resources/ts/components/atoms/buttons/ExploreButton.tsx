import React from "react";
import { memo, FC } from "react";
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";
import { PrimaryButton } from "./PrimaryButton";

const onClickAlert = () => alert("explore button");
export const ExploreButton: FC = memo(() => {
    return (
        <PrimaryButton onClick={onClickAlert}>
            <IconContext.Provider value={{ size: "28px" }}>
                <BiSearch />
                <span className="mx-4">検索</span>
            </IconContext.Provider>
        </PrimaryButton>
    );
});
