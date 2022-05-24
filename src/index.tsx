import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import './index.css'
import 'flowbite'

const container = document.getElementById('root')
const app = createRoot(container!)
app.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)