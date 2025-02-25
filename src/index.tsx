import "bootstrap/dist/css/bootstrap.min.css";
import "admin-lte/dist/css/adminlte.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes Popper.js
import "admin-lte/dist/js/adminlte.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.scss"

import { createRoot } from "react-dom/client";
import App from "./app";

const rootHTML = document.createElement("div");
document.body.appendChild(rootHTML);

const root = createRoot(rootHTML);
root.render(<App />);
