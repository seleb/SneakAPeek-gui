import React, { Component } from "react";

import Image from "./Image.jsx";
export default class Stream extends Component {
	render() {
		return (
			<figure className="stream">
				<Image
					src={this.props.stream.imgUrl}
					fallback={this.props.stream.oldImgUrl}
					invalid={this.props.stream.invalid}
					onClick={
						this.props.popout ? () => this.props.popout() : () => {}
					}
				/>
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
					{this.props.remove ? (
						<button
							className="button remove-button"
							onClick={() => this.props.remove()}
						>
							X
						</button>
					) : null}
				</figcaption>
			</figure>
		);
	}
}
