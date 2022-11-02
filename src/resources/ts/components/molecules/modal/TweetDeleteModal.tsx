import React from "react";
import { memo, FC } from "react";
import { useDeleteTweet } from "../../hooks/useDeleteTweet";

type Props = {
    tweetId: number;
    onClose: () => void;
};

export const TweetDeleteModal: FC<Props> = memo((props) => {
    const { tweetId, onClose } = props;
    const { deleteTweet } = useDeleteTweet();
    const onClickDeleteTweet = () => {
        deleteTweet(tweetId);
    };
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between px-4 mt-4 rounded-t">
                            <h3 className="text-2xl text-gray-600 font-semibold">
                                ツイートを削除しますか？
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={onClickDeleteTweet}
                            ></button>
                        </div>
                        {/*body*/}
                        <div className="relative px-6 flex-auto">
                            <p className="my-2 text-slate-500 text-lg leading-relaxed">
                                この操作は取り消せません。
                                <br />
                                プロフィール、あなたをフォローしている
                                アカウントのタイムライン、Twitterの
                                検索結果からツイートが削除されます。
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex flex-col gap-4 items-center justify-end px-4 my-6 rounded-b">
                            <button
                                className="bg-red-500 min-w-[80%] text-white active:bg-red-600 font-bold uppercase text-lg px-6 py-3 rounded-full shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={onClickDeleteTweet}
                            >
                                削除
                            </button>
                            <button
                                className="min-w-[80%] outline outline-slate-400 outline-1 text-gray-600 font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg text-lg mr-1 mb-1 ease-linear transition-all duration-150"
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
