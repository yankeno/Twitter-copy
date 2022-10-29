import React from "react";
import { memo, FC } from "react";
import { useLogin } from "../hooks/useLogin";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export const LoginForm: FC = memo(() => {
    const {
        onSubmitLogin,
        onChangeEmail,
        onChangePassword,
        onKeyDownSubmit,
        onCompositionStart,
        onCompositionEnd,
    } = useLogin();
    return (
        <div className="mx-6 mt-8 space-y-6">
            <div
                className="-space-y-px rounded-md shadow-sm"
                onKeyDown={onKeyDownSubmit}
            >
                <div className="flex flex-col mb-2">
                    <div className="relative font-light">
                        <input
                            type="text"
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                            name="email"
                            placeholder="Email"
                            onChange={onChangeEmail}
                            onCompositionStart={onCompositionStart}
                            onCompositionEnd={onCompositionEnd}
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-2">
                    <div className="relative font-light">
                        <input
                            type="password"
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                            name="password"
                            placeholder="Password"
                            onChange={onChangePassword}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center mx-2">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                    />
                    <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-600"
                    >
                        Remember me
                    </label>
                </div>

                <div className="text-sm mx-2">
                    <a href="#" className="text-blue-500 hover:text-blue-400">
                        Forgot your password?
                    </a>
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    onClick={onSubmitLogin}
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-400 hover:bg-blue-400/80 py-2 px-4 text-sm font-medium text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon
                            className="h-5 w-5 text-blue-600 group-hover:text-blue-500"
                            aria-hidden="true"
                        />
                    </span>
                    Sign in
                </button>
            </div>
        </div>
    );
});
