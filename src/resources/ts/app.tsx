import "../js/bootstrap";
import "../css/app.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/router/Router";

const App = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};
const container = document.getElementById("app") as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);
