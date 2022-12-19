import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";

import App from "./App";
import Provider from "./context/knucklebones";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<Provider><App className="bg-gray-300 h-screen"/></Provider>)