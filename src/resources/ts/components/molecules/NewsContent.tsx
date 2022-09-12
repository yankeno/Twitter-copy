import React from "react";
import { memo, FC } from "react";

export const NewsContent: FC = memo(() => {
    return (
        <div className="">
            <ul className="text-gray-500">
                <li className=" px-4 py-2 hover:bg-stone-300 cursor-pointer">
                    <span className="text-gray-400 text-[2px]">
                        エンターテインメント
                    </span>
                    <br />
                    <a href="#" className="block font-bold">
                        テスト
                    </a>
                </li>
                <li className=" px-4 py-2 hover:bg-stone-300 cursor-pointer">
                    <span className="text-gray-400 text-[2px]">
                        エンターテインメント
                    </span>
                    <br />
                    <a href="#" className="block font-bold">
                        テスト
                    </a>
                </li>
                <li className=" px-4 py-2 hover:bg-stone-300 cursor-pointer">
                    <span className="text-gray-400 text-[2px]">
                        エンターテインメント
                    </span>
                    <br />
                    <a href="#" className="block font-bold">
                        テスト
                    </a>
                </li>
                <li className=" px-4 py-2 hover:bg-stone-300 cursor-pointer">
                    <span className="text-gray-400 text-[2px]">
                        エンターテインメント
                    </span>
                    <br />
                    <a href="#" className="block font-bold">
                        テスト
                    </a>
                </li>
                <li className=" px-4 py-2 hover:bg-stone-300 cursor-pointer">
                    <span className="text-gray-400 text-[2px]">
                        エンターテインメント
                    </span>
                    <br />
                    <a href="#" className="block font-bold">
                        テスト
                    </a>
                </li>
                <li className=" px-4 py-2 hover:bg-stone-300 cursor-pointer">
                    <span className="text-gray-400 text-[2px]">
                        エンターテインメント
                    </span>
                    <br />
                    <a href="#" className="block font-bold">
                        テスト
                    </a>
                </li>
                <li className="px-4 py-4 text-sky-600 hover:bg-stone-300 cursor-pointer">
                    <a href="#">さらに表示</a>
                </li>
            </ul>
        </div>
    );
});
