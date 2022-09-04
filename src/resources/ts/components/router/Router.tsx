import React from "react";
import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Notification } from "../pages/Notification";
import { Profile } from "../pages/Profile";
import { Page404 } from "../pages/Page404";

export const Router: FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
});
