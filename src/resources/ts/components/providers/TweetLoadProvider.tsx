import React, {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

export type TweetLoadContextType = {
    isLoaded: boolean;
    setIsLoaded: Dispatch<SetStateAction<boolean>>;
};

export const TweetLoadContext = createContext<TweetLoadContextType>(
    {} as TweetLoadContextType
);

type Props = {
    children?: ReactNode;
};

export const TweetLoadedProvider: FC<Props> = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return (
        <TweetLoadContext.Provider value={{ isLoaded, setIsLoaded }}>
            {children}
        </TweetLoadContext.Provider>
    );
};
