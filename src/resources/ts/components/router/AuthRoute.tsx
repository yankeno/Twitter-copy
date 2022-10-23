import React, { FC, memo, useEffect, useLayoutEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const baseUrl: string = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};
let isLoggedIn: boolean = false;

// TODO: loading 中であることがわかる要素を表示する
const loading = (
    <div className="flex justify-center items-center">
        <div
            className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0"
            role="status"
        >
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

export const AuthRoute: FC = memo(() => {
    const [isLoaded, setIsLoaded] = useState(false);
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
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoaded(true);
            });
    });

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
                loading
            )}
        </>
    );
});
