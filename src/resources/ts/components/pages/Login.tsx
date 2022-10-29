import React from "react";
import { FC, memo } from "react";

import { LoginPageIcon } from "../atoms/icons/LoginPageIcon";
import { LoginForm } from "../organism/LoginForm";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Login: FC = memo(() => {
    const navigate = useNavigate();
    const onClickSignUp = (): void => {
        navigate("/register");
    };
    return (
        <>
            <div className="flex items-center justify-center translate-y-1/2">
                <div className="flex flex-col max-w-md py-12 bg-white rounded-lg shadow lg:px-10">
                    <div>
                        <div className="flex justify-center items-center">
                            <LoginPageIcon />
                        </div>
                        <h2 className="font-light mt-6 text-center text-2xl tracking-tight text-gray-600">
                            Sign in your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600"></p>
                    </div>
                    <LoginForm />
                    <div
                        className="my-4 text-blue-500 hover:text-blue-400 flex justify-center items-center cursor-pointer"
                        onClick={onClickSignUp}
                    >
                        Sign up an account
                    </div>
                    <Toaster />
                </div>
            </div>
        </>
    );
});
