import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
    FC,
} from "react";

export type SearchTweetContextType = {
    resultTweets: Array<JSX.Element> | [];
    setResultTweets: Dispatch<SetStateAction<Array<JSX.Element> | []>>;
};
export const SearchTweetContext = createContext<SearchTweetContextType>(
    {} as SearchTweetContextType
);
type Props = {
    children?: ReactNode;
};

export const SearchTweetProvider: FC<Props> = ({ children }) => {
    const [resultTweets, setResultTweets] = useState<Array<JSX.Element> | []>(
        []
    );
    return (
        <SearchTweetContext.Provider value={{ resultTweets, setResultTweets }}>
            {children}
        </SearchTweetContext.Provider>
    );
};
