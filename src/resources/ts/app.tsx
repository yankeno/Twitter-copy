import "../js/bootstrap";
import "../css/app.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./components/pages/Login";
import { Page404 } from "./components/pages/404";
import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { HomeButton } from "./components/atoms/buttons/HomeButton";
import { ExploreButton } from "./components/atoms/buttons/ExploreButton";
import { NotificationButton } from "./components/atoms/buttons/NotificationButton";
import { ProfileButton } from "./components/atoms/buttons/ProfileButton";
import { TweetButton } from "./components/atoms/buttons/TweetButton";

const onClickAlert = () => {
    alert("hello world");
};
const App = () => {
    return (
        <>
            <HomeButton />
            <ExploreButton />
            <NotificationButton />
            <ProfileButton />
            <TweetButton />
        </>
    );
};
const container = document.getElementById("app") as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);
