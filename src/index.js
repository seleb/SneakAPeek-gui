import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Routes from "./routes.js";
import store from "./store";

import "./assets/reset.css";
import "./assets/styles.css";

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById("app")
);
