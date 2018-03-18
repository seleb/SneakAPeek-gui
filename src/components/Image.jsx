import React, { Component } from "react";
import { connect } from "react-redux";

import { loaded, loading, errored } from "./../actions/images";

class Image extends Component {
	componentDidMount() {
		this.props.dispatch(loading(this.props.src));
	}
	onLoad() {
		this.props.dispatch(loaded(this.props.src));
	}
	onError() {
		this.props.dispatch(errored(this.props.src));
	}
	render() {
		let className = "preview";
		if (!this.props.imagesReducer[this.props.src]) {
			className += " loading";
		}
		return (
			<div className={className}>
				<img
					src={this.props.src}
					alt={this.props.src}
					onLoad={() => this.onLoad()}
					onError={() => this.onError()}
				/>
			</div>
		);
	}
}

export default connect(state => state)(Image);
