import React from "react";
import {HashRouter, Route, Switch, Link} from "react-router-dom";

import App from "./containers/App.jsx";

export default () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" component={App} />
			</Switch>
		</HashRouter>
	)
};