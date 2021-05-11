import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import routes from "./routes";

const history = createBrowserHistory();

ReactDOM.render(<Router history={history} children={routes} />, document.getElementById("wrapper"));
