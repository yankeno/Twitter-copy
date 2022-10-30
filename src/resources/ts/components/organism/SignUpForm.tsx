import React from "react";
import { memo, FC } from "react";
import { useRegistUser } from "../hooks/useRegistUser";

export const SignUpForm: FC = memo(() => {
    const {
        onSubmitRegist,
        onChangeAccount,
        onChangeFamilyName,
        onChangeGivenName,
        onChangeEmail,
        onChangePassword,
        onChangeVerifyPassword,
    } = useRegistUser();
    return (
        <div className="p-6 mt-8">
            <div className="flex flex-col mb-2">
                <div className="relative font-light">
                    <input
                        type="text"
                        id="account"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-200 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        name="account"
                        placeholder="Account"
                        onChange={onChangeAccount}
                    />
                </div>
            </div>
            <div className="flex gap-4 mb-2">
                <div className="relative font-light">
                    <input
                        type="text"
                        id="familyName"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-200 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        name="familyName"
                        placeholder="Family name"
                        onChange={onChangeFamilyName}
                    />
                </div>
                <div className="relative font-light">
                    <input
                        type="text"
                        id="givenName"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-200 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        name="givenName"
                        placeholder="Given name"
                        onChange={onChangeGivenName}
                    />
                </div>
            </div>
            <div className="flex flex-col mb-2">
                <div className="relative font-light">
                    <input
                        type="text"
                        id="email"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-200 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Email"
                        onChange={onChangeEmail}
                    />
                </div>
            </div>
            <div className="flex flex-col mb-2">
                <div className="relative font-light">
                    <input
                        type="password"
                        id="password"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-200 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        name="password"
                        placeholder="Password"
                        onChange={onChangePassword}
                    />
                </div>
            </div>
            <div className="flex flex-col mb-2">
                <div className="relative font-light">
                    <input
                        type="password"
                        id="verifyPassword"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-200 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        name="verifyPassword"
                        placeholder="Verify Password"
                        onChange={onChangeVerifyPassword}
                    />
                </div>
            </div>
            <div className="flex w-full my-4">
                <button
                    type="submit"
                    id="submit"
                    className="py-2 px-4  bg-blue-400 hover:bg-blue-400/80 focus:ring-blue-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-1 focus:ring-offset-2 rounded-lg "
                    onClick={onSubmitRegist}
                >
                    Sign up
                </button>
            </div>
        </div>
    );
});
