import React from "react";
import { FC, memo } from "react";

import { LoginPageIcon } from "../atoms/icons/LoginPageIcon";
import { LoginForm } from "../organism/LoginForm";
import { Toaster } from "react-hot-toast";

export const Login: FC = memo(() => {
    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-2 lg:px-4">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <div className="flex justify-center items-center">
                            <LoginPageIcon />
                        </div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-600">
                            Sign in your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600"></p>
                    </div>
                    <LoginForm />
                    <Toaster />
                </div>
            </div>
        </>
    );
});
