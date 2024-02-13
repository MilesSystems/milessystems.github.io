import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/admin-lte/dist/css/AdminLTE.min.css"
import "/node_modules/admin-lte/dist/css/skins/skin-red-light.min.css"
import { createRoot } from "react-dom/client";
import Privacy from "./privacy";

import * as jQuery from "jquery"

import "/node_modules/font-awesome/css/font-awesome.css"

// @ts-ignore
window.$ = window.jQuery = jQuery

$(()=>{

    require("/node_modules/bootstrap/dist/js/bootstrap.min.js")

})

const rootHTML = document.createElement('div');

document.body.appendChild(rootHTML);

const root = createRoot(rootHTML)

root.render(<Privacy/>);

