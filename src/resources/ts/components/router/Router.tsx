import React from "react";
import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Notification } from "../pages/Notification";
import { Profile } from "../pages/Profile";
import { Page404 } from "../pages/Page404";
import { Explore } from "../pages/Explore";
import { Message } from "../pages/Message";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { AuthRoute } from "./AuthRoute";

export const Router: FC = memo(() => {
    return (
        <LoginUserProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<AuthRoute />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </LoginUserProvider>
    );
});
