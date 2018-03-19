import React, { Component } from "react";
import { connect } from "react-redux";

import { loaded, loading, errored } from "./../actions/images";

class Image extends Component {
	isLoading() {
		const img = this.props.imagesReducer[this.props.src];
		return img && !img.loaded;
	}
	isErrored() {
		const img = this.props.imagesReducer[this.props.src];
		return !img || img.errored;
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
		let className = "preview";
		if (this.isLoading()) {
			className += " loading";
		} else if (this.isErrored()) {
			className += " errored";
		}
		if (this.props.invalid || this.isLoading()) {
			className += " invalid";
		}
		return (
			<div className={className}>
				{this.props.fallback ? (
					<img
						style={{ display: this.isLoading() ? "block" : "none" }}
						src={this.props.fallback}
						alt={this.props.fallback}
						onClick={() => this.props.onClick()}
					/>
				) : null}
				{this.props.src ? (
					<img
						style={{ display: this.isLoading() ? "none" : "block" }}
						src={this.props.src}
						alt={this.props.src}
						onLoad={() => this.onLoad()}
						onError={() => this.onError()}
						onClick={() => this.props.onClick()}
					/>
				) : null}
			</div>
		);
	}
}

export default connect(state => state)(Image);
