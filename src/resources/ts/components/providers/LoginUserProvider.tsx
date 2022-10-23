import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
    FC,
} from "react";

import { User } from "../../types/api/user";

export type LoginUserContextType = {
    loginUser: User | null;
    setLoginUser: Dispatch<SetStateAction<User | null>>;
};
export const LoginUserContext = createContext<LoginUserContextType>(
    {} as LoginUserContextType
);
type Props = {
    children?: ReactNode;
};

export const LoginUserProvider: FC<Props> = ({ children }) => {
    const [loginUser, setLoginUser] = useState<User | null>(null);
    return (
        <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
            {children}
        </LoginUserContext.Provider>
    );
};
