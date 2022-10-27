import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "./useLoginUser";

const baseUrl: string = import.meta.env.VITE_APP_URL;
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

export const useLogout = () => {
    const navigate = useNavigate();
    const { setLoginUser } = useLoginUser();

    const onSubmitLogout = () => {
        toast.promise(
            fetch(`${baseUrl}/api/logout`, {
                method: "POST",
                headers: headers,
                credentials: "include",
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(res.statusText);
                    }
                })
                .then(() => {
                    setLoginUser(null);
                    navigate("/");
                })
                .catch((error) => {
                    console.error(error);
                }),
            {
                loading: "ログアウト中...",
                success: "ログアウトしました",
                error: "ログアウトに失敗しました。\n時間をおいて再度お試しください。",
            }
        );
    };
    return onSubmitLogout;
};
