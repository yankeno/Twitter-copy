import "../js/bootstrap";
import "../css/app.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./components/auth/login";

const App = () => {
    const title: string = "Laravel 9 Vite with TypeScript React !!";
    return <Login />;
};
const container = document.getElementById("app") as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);
