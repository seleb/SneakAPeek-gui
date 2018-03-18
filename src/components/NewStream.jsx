import React, { Component } from "react";

export default class Stream extends Component {
	render() {
		return (
			<article className="stream new-stream">
				<button className="button" onClick={() => this.props.addStream()}>
					Add new stream
				</button>
			</article>
		);
	}
}
