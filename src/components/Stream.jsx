import React, { Component } from "react";

import Image from "./Image.jsx";
import defaultStreamIcon from "../assets/icon_stream.svg?url=true";

export default class Stream extends Component {
	render = () => {
		return (
			<figure className="stream">
				<Image
					src={this.props.src}
					fallback={defaultStreamIcon}
				/>
				<figcaption>
					<span className="stream-name">{this.props.src}</span>
					<button className="remove-button" onClick={() => this.props.remove()}>X</button>
				</figcaption>
			</figure>
		)
	}
}