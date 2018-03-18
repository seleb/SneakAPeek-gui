import React, { Component } from "react";

import Image from "./Image.jsx";

export default class Stream extends Component {
	render() {
		return (
			<figure className="stream">
				<Image src={this.props.stream.imgUrl} />
				<figcaption>
					<span className="stream-name">
						{this.props.stream.name}
					</span>
					<button
						className="button refresh-button"
						onClick={() => this.props.refresh()}
					>
						↻
					</button>
					<button
						className="button remove-button"
						onClick={() => this.props.remove()}
					>
						X
					</button>
				</figcaption>
			</figure>
		);
	}
}
