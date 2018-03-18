import React, { Component } from "react";

export default class TextInput extends Component {
	onFocus() {
		this.refs.input.focus();
	}
	render() {
		return (
			<input
				type="text"
				ref="input"
				placeholder={this.props.placeholder}
				value={this.props.value}
				onChange={event => this.props.onChange(event.target.value)}
				onKeyPress={this.props.onKeyPress}
			/>
		);
	}
}
