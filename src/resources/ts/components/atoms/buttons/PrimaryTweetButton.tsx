import React, { useState } from "react";
import { memo, FC } from "react";
import { SecondaryButton } from "./SecondaryButton";
import { TweetPostModal } from "../../molecules/modal/TweetPostModal";

export const PrimaryTweetButton: FC = memo(() => {
    const [showTweetModal, setShowTweetModal] = useState<boolean>(false);
    const onOpenTweetModal = () => {
        setShowTweetModal(true);
    };
    const onCloseTeetModal = () => {
        setShowTweetModal(false);
    };
    return (
        <>
            <SecondaryButton onClick={onOpenTweetModal}>
                <p>ツイートする</p>
            </SecondaryButton>
            {showTweetModal ? (
                <TweetPostModal onClose={onCloseTeetModal} />
            ) : null}
        </>
    );
});
