import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./views/Weather";
import Home from "./views/Home";
import React from "react";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="weather/:id" element={<Weather />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <div style={{ margin: "10px" }}>404 Not found</div>
                    }
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
