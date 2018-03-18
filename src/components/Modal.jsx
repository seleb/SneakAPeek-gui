import React, { Component } from "react";

export default class Modal extends Component {
	onSubmit() {
		this.props.onSubmit();
		this.props.onClose();
	}
	onAbort() {
		this.props.onAbort();
		this.props.onClose();
	}
	render() {
		if (!this.props.show) {
			return <div className="backdrop hidden"></div>;
		}
		return (
			<div className="backdrop">
				<div className="modal">
					{this.props.children}
					<button
						className="submit-button"
						onClick={() => this.onSubmit()}
					>
						✓
					</button>
					<button
						className="remove-button"
						onClick={() => this.onAbort()}
					>
						X
					</button>
				</div>
			</div>
		);
	}
}
