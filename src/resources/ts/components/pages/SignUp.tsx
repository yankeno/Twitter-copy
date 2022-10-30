import React from "react";
import { memo, FC } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginPageIcon } from "../atoms/icons/LoginPageIcon";
import { SignUpForm } from "../organism/SignUpForm";

export const SignUp: FC = memo(() => {
    const navigate = useNavigate();
    const onClickLogin = () => {
        navigate("/");
    };
    return (
        <div className="flex items-center justify-center translate-y-1/3">
            <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow lg:px-10">
                <div className="flex justify-center items-center py-2">
                    <LoginPageIcon />
                </div>
                <div className="self-center mb-2 text-xl font-light text-gray-600 sm:text-2xl">
                    Create a new account
                </div>
                <div className="justify-center text-sm text-center text-gray-500 flex-items-center">
                    <span>Already have an account ? </span>
                    <span
                        className="text-sm text-blue-500 hover:text-blue-400 underline cursor-pointer"
                        onClick={onClickLogin}
                    >
                        Sign in
                    </span>
                </div>
                <SignUpForm />
            </div>
            <Toaster />
        </div>
    );
});
