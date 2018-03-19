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
		let className = `backdrop ${this.props.className}`;
		if (!this.props.show) {
			className += " hidden";
			return <div className={className} />;
		}
		return (
			<div className={className}>
				<div className="modal">
					{this.props.children}
					<div className="buttons">
						{this.props.onSubmit ? (
							<button
								className="button submit-button"
								onClick={() => this.onSubmit()}
							>
								✓
							</button>
						) : null}
						{this.props.onAbort ? (
							<button
								className="button remove-button"
								onClick={() => this.onAbort()}
							>
								X
							</button>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}
