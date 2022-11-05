import { ChangeEvent, KeyboardEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "./useLoginUser";

const baseUrl: string = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};
type errMsgs = {
    message: {
        [key: string]: Array<string>;
    };
};

export const useRegistUser = () => {
    const navigate = useNavigate();
    const { setLoginUser } = useLoginUser();

    const [account, setAccount] = useState<string>("");
    const [familyName, setFamilyName] = useState<string>("");
    const [givenName, setGivenName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [verifyPassword, setVerifyPassword] = useState<string>("");

    const onChangeAccount = (e: ChangeEvent<HTMLInputElement>) => {
        setAccount(e.target.value);
    };
    const onChangeFamilyName = (e: ChangeEvent<HTMLInputElement>) => {
        setFamilyName(e.target.value);
    };
    const onChangeGivenName = (e: ChangeEvent<HTMLInputElement>) => {
        setGivenName(e.target.value);
    };
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const onChangeVerifyPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setVerifyPassword(e.target.value);
    };

    const isValidInput = (): boolean => {
        if (!account) {
            toast.error("アカウント名を入力してください。");
            return false;
        }
        if (!familyName) {
            toast.error("姓を入力してください。");
            return false;
        }
        if (!givenName) {
            toast.error("名を入力してください。");
            return false;
        }
        if (!email) {
            toast.error("メールアドレスを入力してください。");
            return false;
        }
        if (!password) {
            toast.error("パスワードを入力してください。");
            return false;
        }
        if (!verifyPassword) {
            toast.error("確認用のパスワードを入力してください。");
            return false;
        }
        if (password !== verifyPassword) {
            toast.error("確認用パスワードが一致していません。");
            return false;
        }
        return true;
    };

    const onSubmitRegist = () => {
        if (!isValidInput()) {
            return;
        }
        const data = {
            account: account,
            name: familyName + " " + givenName,
            familyName: familyName,
            givenName: givenName,
            email: email,
            password: password,
        };
        fetch(`${baseUrl}/api/register`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: headers,
            credentials: "include",
        })
            .then((res) => {
                if (!res.ok) {
                    throw res;
                }
                return res.json();
            })
            .then((data) => {
                setLoginUser(data.user);
                navigate("/home");
            })
            .catch((err) => {
                err.json().then((data: errMsgs) => {
                    const msgs = data.message;
                    Object.keys(msgs).forEach((propKey) => {
                        Object.keys(msgs[propKey]).forEach((msgKey: any) => {
                            toast.error(msgs[propKey][msgKey]);
                        });
                    });
                });
            });
    };
    return {
        onSubmitRegist,
        onChangeAccount,
        onChangeFamilyName,
        onChangeGivenName,
        onChangeEmail,
        onChangePassword,
        onChangeVerifyPassword,
    };
};
