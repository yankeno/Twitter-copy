import React from "react";
import { memo, FC } from "react";
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";
import { PrimaryButton } from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

export const ExploreButton: FC = memo(() => {
    const navigate = useNavigate();
    const onClickExplore = () => {
        navigate("/explore");
    };
    return (
        <PrimaryButton onClick={onClickExplore}>
            <IconContext.Provider value={{ size: "28px" }}>
                <BiSearch />
                <span className="mx-4">検索</span>
            </IconContext.Provider>
        </PrimaryButton>
    );
});
