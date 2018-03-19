import React, { Component } from "react";
import { connect } from "react-redux";

import { loaded, loading, errored } from "./../actions/images";

class Image extends Component {
	isLoaded() {
		return this.props.imagesReducer[this.props.src].loaded;
	}
	isLoading() {
		return !this.props.imagesReducer[this.props.src].loaded;
	}
	isErrored() {
		return this.props.imagesReducer[this.props.src].errored;
	}
	componentDidMount() {
		this.props.dispatch(loading(this.props.src));
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.src !== this.props.src) {
			this.props.dispatch(loading(nextProps.src));
		}
	}
	onLoad() {
		this.props.dispatch(loaded(this.props.src));
	}
	onError() {
		this.props.dispatch(errored(this.props.src));
	}
	render() {
		if (!this.props.imagesReducer[this.props.src]) {
			return null;
		}
		let className = "preview";
		if (this.isLoading()) {
			className += " loading";
		} else if (this.isErrored()) {
			className += " errored";
		}
		if (this.props.invalid){
			className += " invalid";
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
