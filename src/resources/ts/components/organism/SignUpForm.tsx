import React from "react";
import { memo, FC } from "react";

export const SignUpForm: FC = memo(() => {
    return (
        <div className="p-6 mt-8">
            <div className="flex flex-col mb-2">
                <div className="relative font-light">
                    <input
                        type="text"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        name="account"
                        placeholder="Account"
                    />
                </div>
            </div>
            <div className="flex gap-4 mb-2">
                <div className="relative font-light">
                    <input
                        type="text"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        name="familyName"
                        placeholder="Family name"
                    />
                </div>
                <div className="relative font-light">
                    <input
                        type="text"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        name="givenName"
                        placeholder="Given name"
                    />
                </div>
            </div>
            <div className="flex flex-col mb-2">
                <div className="relative font-light">
                    <input
                        type="text"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Email"
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
                    />
                </div>
            </div>
            <div className="flex w-full my-4">
                <button
                    type="submit"
                    className="py-2 px-4  bg-blue-400 hover:bg-blue-400/80 focus:ring-blue-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-1 focus:ring-offset-2 rounded-lg "
                >
                    Sign up
                </button>
            </div>
        </div>
    );
});
