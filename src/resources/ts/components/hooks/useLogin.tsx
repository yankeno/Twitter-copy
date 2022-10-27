import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "./useLoginUser";

const baseUrl: string = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

export const useLogin = (email: string | null, password: string | null) => {
    const navigate = useNavigate();
    const { setLoginUser } = useLoginUser();
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
            email: email,
            password: password,
        };
        fetch(`${baseUrl}/sanctum/csrf-cookie`, {
            method: "GET",
            credentials: "include",
        })
            .then(() => {
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
                    })
                    .catch((error) => {
                        console.error(error);
                        toast.error(
                            "メールアドレスまたは\nパスワードをご確認ください。"
                        );
                    });
            })
            .catch((error) => {
                toast.error("通信に失敗しました: " + error);
            });
    };
    return onSubmitLogin;
};
