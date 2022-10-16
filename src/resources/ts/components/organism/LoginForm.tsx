import React from "react";
import { memo, FC } from "react";
import { SignInButton } from "../atoms/buttons/SignInButton";
import { useLoginUsers } from "../hooks/useLoginUsers";

export const LoginForm: FC = memo(() => {
    const onSubmitLogin = useLoginUsers();
    return (
        <form className="mt-8 space-y-6" onSubmit={onSubmitLogin} method="POST">
            <div className="-space-y-px rounded-md shadow-sm">
                <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        placeholder="Email address"
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
            <SignInButton />
        </form>
    );
});
