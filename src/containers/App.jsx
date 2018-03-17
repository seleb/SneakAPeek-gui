import React, { Component } from 'react';

import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class App extends Component {
	render = () => {
		return (
			<div className="app">
			</div>
		);
	}
}

export default connect(state => state)(App);
