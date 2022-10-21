import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const baseUrl: string = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

export const useLoginUsers = (
    email: string | null,
    password: string | null
) => {
    const navigate = useNavigate();
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
        }).then((response) => {
            console.log(response);
            fetch(`${baseUrl}/api/login`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: headers,
                credentials: "include",
            }).then((res) => {
                console.log(res.json());
            });
        });
        navigate("/home");
    };
    return onSubmitLogin;
};
