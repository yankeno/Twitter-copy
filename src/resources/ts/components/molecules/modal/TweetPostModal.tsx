import React, { ChangeEvent, KeyboardEvent } from "react";
import { memo, FC, useState } from "react";

import { usePostTweet } from "../../hooks/usePostTweet";

type Props = {
    onClose: () => void;
};

export const TweetPostModal: FC<Props> = memo((props) => {
    const { onClose } = props;
    const [text, setText] = useState<string>("");
    const postTweet = usePostTweet();
    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };
    const onKeyDownSendTweet = (e: KeyboardEvent<HTMLElement>) => {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
            postTweet(text, setText);
            onClose();
        }
    };
    const onClickSendTweet = () => {
        postTweet(text, setText);
        onClose();
    };
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative my-6 mx-auto md:w-96 sm:w-80">
                    <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between px-4 my-4 rounded-t">
                            <h3 className="text-xl text-gray-600 font-semibold">
                                ツイートを送信する
                            </h3>
                        </div>
                        <div className="flex flex-col justify-center relative px-6 w-full h-48">
                            <textarea
                                className="textarea h-full my-2 p-2 rounded-sm text-md outline-slate-400 border border-slate-300 resize-none"
                                id="modalTweetArea"
                                onChange={onChangeText}
                                onKeyDown={onKeyDownSendTweet}
                                placeholder="いまどうしてる？"
                                value={text}
                            ></textarea>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-end px-4 my-6 rounded-b">
                            <button
                                className="bg-blue-400 w-[80%] text-white active:bg-blue-600 font-bold uppercase text-md px-6 py-3 rounded-full shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={onClickSendTweet}
                            >
                                送信
                            </button>
                            <button
                                className="w-[80%] outline outline-slate-400 outline-1 text-gray-600 font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg text-md mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={onClose}
                            >
                                キャンセル
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
});
