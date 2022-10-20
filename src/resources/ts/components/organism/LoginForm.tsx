import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { memo, FC } from "react";
import { useLoginUsers } from "../hooks/useLoginUsers";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export const LoginForm: FC = memo(() => {
    const onSubmitLogin = useLoginUsers;
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        // };
        // const onKeyDownSubmit = (e: KeyboardEvent<HTMLElement>) => {
        //     if (e.key === "Enter") {
        //         onSubmitLogin(email, password);
        //         console.log("enter");
        //     }
    };

    return (
        <div className="mt-8 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">
                <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        placeholder="Email address"
                        onChange={onChangeEmail}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        placeholder="Password"
                        onChange={onChangePassword}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-600"
                    >
                        Remember me
                    </label>
                </div>

                <div className="text-sm">
                    <a
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-500"
                    >
                        Forgot your password?
                    </a>
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    onClick={onSubmitLogin(email, password)}
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-400 hover:bg-blue-400/90 py-2 px-4 text-sm font-medium text-white ocus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon
                            className="h-5 w-5 text-blue-500 group-hover:text-blue-500/90"
                            aria-hidden="true"
                        />
                    </span>
                    Sign in
                </button>
            </div>
        </div>
    );
});
