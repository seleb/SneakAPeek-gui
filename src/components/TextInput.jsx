import React, { Component } from "react";

export default class TextInput extends Component {
	render() {
		return (
			<input
				type="text"
				autoFocus
				placeholder={this.props.placeholder}
				value={this.props.value}
				onChange={event => this.props.onChange(event.target.value)}
				onKeyPress={this.props.onKeyPress}
			/>
		);
	}
}
