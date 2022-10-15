import React from "react";
import { memo, FC } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export const SignInButton: FC = memo(() => {
    return (
        <div>
            <button
                type="submit"
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
    );
});
