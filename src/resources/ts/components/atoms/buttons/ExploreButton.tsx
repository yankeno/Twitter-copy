import React from "react";
import { memo, FC } from "react";
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";
import { PrimaryButton } from "./PrimaryButton";
import { useNavigate, useLocation } from "react-router-dom";

export const ExploreButton: FC = memo(() => {
    const navigate = useNavigate();
    const location = useLocation();
    const onClickExplore = () => {
        navigate("/explore");
    };
    return (
        <PrimaryButton onClick={onClickExplore}>
            <IconContext.Provider value={{ size: "28px" }}>
                <BiSearch
                    className={
                        location.pathname === "/explore" ? "stroke-1" : ""
                    }
                />
                <span className="mx-4">検索</span>
            </IconContext.Provider>
        </PrimaryButton>
    );
});
