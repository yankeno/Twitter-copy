    import React from "react";
    import { memo, FC } from "react";

    export const SearchInput: FC = memo(() => {
        return (
            <>
                <form>
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                    >
                        Search
                    </label>
                    <div className="relative w-80">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="tweet-search"
                            className="block h-12 p-4 pl-10 w-full text-sm text-gray-900 bg-stone-200 rounded-full outline-none focus:ring-2 ring-[#3E9CF2]-300"
                            placeholder="キーワード検索"
                        />
                    </div>
                </form>
            </>
        );
    });