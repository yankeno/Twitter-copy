import React, { FC, memo, useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoadingTwitterIcon } from "../atoms/icons/LoadingTwitterIcon";
import { useLoginUser } from "../hooks/useLoginUser";

const baseUrl: string = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};
let isLoggedIn: boolean = false;

export const AuthRoute: FC = memo(() => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { loginUser, setLoginUser } = useLoginUser();
    useEffect(() => {
        // /api/me でログインの確認してセッションが切れてなかったらそのまま表示する
        fetch(`${baseUrl}/api/me`, {
            method: "GET",
            headers: headers,
        })
            .then((res) => {
                if (res.ok) {
                    isLoggedIn = true;
                }
                return res.json();
            })
            .then((data) => {
                setLoginUser(data.user);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log(loginUser);
                setIsLoaded(true);
            });
    }, []);

    return (
        /**
         * loading 完了、かつログインセッションが
         * 切れていない場合はリクエストのあった URL を表示する
         */
        <>
            {isLoaded ? (
                isLoggedIn ? (
                    <Outlet />
                ) : (
                    <Navigate to="/" state={{ from: location }} />
                )
            ) : (
                <LoadingTwitterIcon />
            )}
        </>
    );
});
