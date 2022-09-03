import React from "react";
import { memo, FC } from "react";
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";
import { PrimaryButton } from "./PrimaryButton";

const onClickAlert = () => alert("explore button");
export const ExploreButton: FC = memo(() => {
    return (
        <PrimaryButton onClick={onClickAlert}>
            <IconContext.Provider value={{ size: "23px" }}>
                <BiSearch />
                &nbsp;検索
            </IconContext.Provider>
        </PrimaryButton>
    );
});
