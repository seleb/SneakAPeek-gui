import React, { Component } from "react";
import ReactDOM from "react-dom";

import Hls from "hls.js";

export default class HlsVideo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}
	componentDidMount() {
		this.checkIfVideoNeedsInstallation();
	}
	componentDidUpdate() {
		this.checkIfVideoNeedsInstallation();
	}

	checkIfVideoNeedsInstallation() {
		if (!this.props.src) {
			return;
		}

		this.loadVideo();
	}
	loadVideo() {
		if (this.hls || !this.props.src) {
			return;
		}

		let video = ReactDOM.findDOMNode(this.refs.player);
		if (!video) {
			return;
		}

		this.hls = new Hls();
		this.hls.loadSource(this.props.src);
		this.hls.attachMedia(video);
		this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
			this.setState({
				loaded: true
			});
			video.play();
		});
	}

	render = () => {
		let className = "preview";
		if (!this.state.loaded) {
			className += " loading";
		}
		if (!Hls.isSupported()) {
			return <p>Video not supported :(</p>;
		}
		return <video className={className} ref="player" />;
	};
}
