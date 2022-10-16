import { useNavigate } from "react-router-dom";

export const useLoginUsers = () => {
    const navigate = useNavigate();
    const onSubmitLogin = () => {
        alert("login submit.");
        navigate("/home");
    };
    return onSubmitLogin;
};
