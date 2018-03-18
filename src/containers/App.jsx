import React, { Component } from "react";

import { connect } from "react-redux";
import {
	removeStream,
	addStream,
	getStreams,
	streamError,
	streamLoad
} from "./../actions/stream";
import { open as modalOpen, close as modalClose } from "./../actions/modals";
import { Link } from "react-router-dom";

import Stream from "../components/Stream.jsx";
import NewStream from "../components/NewStream.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Modal from "../components/Modal.jsx";
import TextInput from "../components/TextInput.jsx";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newStream: ""
		};
	}
	onChange(val) {
		this.setState({ newStream: val });
	}
	removeStream(idx) {
		this.props.dispatch(removeStream(idx));
	}
	openAddStreamModal() {
		this.props.dispatch(modalOpen("newStream"));
	}
	addStream() {
		this.props.dispatch(addStream(this.state.newStream));
		this.props.dispatch(getStreams([this.state.newStream]));
	}
	getStreams() {
		this.props.dispatch(
			getStreams(
				this.props.streamReducer.streams.map(stream => stream.name)
			)
		);
	}

	render() {
		return (
			<div className="app">
				<Header />
				<button
					onClick={() => this.getStreams()}
					style={{
						height: "4em",
						backgroundColor: "white",
						color: "black"
					}}
				>
					Refresh
				</button>
				<section className="streams">
					{this.props.streamReducer.streams.map((stream, idx) => (
						<Stream
							key={idx}
							stream={stream}
							remove={() => this.removeStream(idx)}
						/>
					))}
					<NewStream addStream={() => this.openAddStreamModal()} />
				</section>
				<Footer />
				<Modal
					key={"newStream"}
					show={this.props.modalsReducer.modals["newStream"]}
					onSubmit={() => this.addStream()}
					onAbort={() => console.log("abort")}
					onClose={() => {
						this.setState({ newStream: "" });
						this.props.dispatch(modalClose("newStream"));
					}}
				>
					<TextInput
						ref={input => {
							if (input) {
								input.onFocus();
							}
						}}
						placeholder="Channel name..."
						value={this.state.newStream}
						onChange={v => this.onChange(v)}
					/>
				</Modal>
			</div>
		);
	}
}

export default connect(state => state)(App);
