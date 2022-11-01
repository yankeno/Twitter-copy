import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
    FC,
} from "react";

/**
 * @TODO tweets は Tweet の配列に変更するのでここの型定義も変更する
 */
export type TweetContextType = {
    tweets: Array<JSX.Element> | [];
    setTweets: Dispatch<SetStateAction<Array<JSX.Element> | []>>;
};
export const TweetContext = createContext<TweetContextType>(
    {} as TweetContextType
);
type Props = {
    children?: ReactNode;
};

export const TweetProvider: FC<Props> = ({ children }) => {
    const [tweets, setTweets] = useState<Array<JSX.Element> | []>([]);
    return (
        <TweetContext.Provider value={{ tweets, setTweets }}>
            {children}
        </TweetContext.Provider>
    );
};
