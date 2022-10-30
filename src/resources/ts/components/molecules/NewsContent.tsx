import React from "react";
import { memo, FC } from "react";

export const NewsContent: FC = memo(() => {
    return (
        <div className="">
            <ul className="text-gray-500">
                <li className=" px-4 py-2 hover:bg-stone-300 cursor-pointer">
                    <span className="text-gray-400 text-[2px]">スポーツ</span>
                    <br />
                    <a href="#" className="block font-bold">
                        ヤクルト日本シリーズ進出
                    </a>
                </li>
                <li className=" px-4 py-2 hover:bg-stone-300 cursor-pointer">
                    <span className="text-gray-400 text-[2px]">
                        国際ニュース
                    </span>
                    <br />
                    <a href="#" className="block font-bold">
                        梨泰院で転倒事故
                    </a>
                </li>
                <li className=" px-4 py-2 hover:bg-stone-300 cursor-pointer">
                    <span className="text-gray-400 text-[2px]">スポーツ</span>
                    <br />
                    <a href="#" className="block font-bold">
                        競馬G1🐎天皇賞・秋
                    </a>
                </li>
                <li className=" px-4 py-2 hover:bg-stone-300 cursor-pointer">
                    <span className="text-gray-400 text-[2px]">
                        国際ニュース
                    </span>
                    <br />
                    <a href="#" className="block font-bold">
                        ロシアによるウクライナへの侵攻状況
                    </a>
                </li>
                <li className=" px-4 py-2 hover:bg-stone-300 cursor-pointer">
                    <span className="text-gray-400 text-[2px]">
                        エンターテインメント
                    </span>
                    <br />
                    <a href="#" className="block font-bold">
                        マスク不着用で反則負け
                    </a>
                </li>
                <li className=" px-4 py-2 hover:bg-stone-300 cursor-pointer">
                    <span className="text-gray-400 text-[2px]">スポーツ</span>
                    <br />
                    <a href="#" className="block font-bold">
                        サイン盗み
                    </a>
                </li>
                <li className="px-4 py-4 text-sky-600 hover:bg-stone-300 cursor-pointer">
                    <a href="#">さらに表示</a>
                </li>
            </ul>
        </div>
    );
});
