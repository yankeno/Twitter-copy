import { ChangeEvent, KeyboardEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "./useLoginUser";

const baseUrl: string = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

export const useRegistUser = () => {
    const navigate = useNavigate();
    const { setLoginUser } = useLoginUser();
    const [account, setAccount] = useState<string>("");
    const [familyName, setFamilyName] = useState<string>("");
    const [givenName, setGivenName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const onKeyDownSubmit = (e: KeyboardEvent<HTMLElement>) => {
        if (e.key === "Enter") {
            onSubmitLogin();
        }
    };

    const isValidInput = (): boolean => {
        if (!email) {
            toast.error("メールアドレスを入力してください。");
            return false;
        }
        if (!password) {
            toast.error("パスワードを入力してください。");
            return false;
        }
        return true;
    };
    const onSubmitLogin = () => {
        if (!isValidInput()) {
            navigate("/");
            return;
        }
        const data = {
            account: account,
            familyName: familyName,
            givenName: givenName,
            email: email,
            password: password,
        };

        fetch(`${baseUrl}/sanctum/csrf-cookie`, {
            method: "GET",
            credentials: "include",
        })
            .then(() => {
                toast.promise(
                    fetch(`${baseUrl}/api/login`, {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: headers,
                        credentials: "include",
                    })
                        .then((res) => {
                            if (!res.ok) {
                                throw new Error(res.statusText);
                            }
                            return res.json();
                        })
                        .then((data) => {
                            setLoginUser(data.user);
                            navigate("/home");
                        }),
                    {
                        loading: "ログイン中...",
                        success: "ログインに成功しました。",
                        error: "メールアドレスまたは\nパスワードをご確認ください。",
                    }
                );
            })
            .catch(() => {
                toast.error("通信に失敗しました。");
            });
    };
    return { onSubmitLogin, onChangeEmail, onChangePassword, onKeyDownSubmit };
};
