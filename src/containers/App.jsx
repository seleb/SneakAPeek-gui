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
import HlsVideo from "../components/HlsVideo.jsx";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newStream: "",
			bigStream: null,
			bigStreamPlaying: false
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
	popoutStream(idx) {
		this.setState({ bigStream: idx });
		this.props.dispatch(modalOpen("bigStream"));
	}
	addStream() {
		this.props.dispatch(addStream(this.state.newStream));
		this.props.dispatch(getStreams([this.state.newStream]));
	}
	updateStream(idx) {
		this.props.dispatch(
			getStreams([this.props.streamReducer.streams[idx].name])
		);
	}
	updateStreams() {
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
				<section className="streams">
					{this.props.streamReducer.streams.map((stream, idx) => (
						<Stream
							key={idx}
							stream={stream}
							remove={() => this.removeStream(idx)}
							refresh={() => this.updateStream(idx)}
							popout={() => this.popoutStream(idx)}
						/>
					))}
					<NewStream addStream={() => this.openAddStreamModal()} />
				</section>
				<Footer>
					<button
						className="button refresh-button"
						onClick={() => this.updateStreams()}
					>
						↻
					</button>
				</Footer>
				<Modal
					className="newStream"
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
						placeholder="Channel name..."
						value={this.state.newStream}
						onChange={v => this.onChange(v)}
						onKeyPress={event => {
							if (event.key === "Enter") {
								event.stopPropagation();
								this.addStream();
								this.setState({ newStream: "" });
								this.props.dispatch(modalClose("newStream"));
							}
						}}
					/>
				</Modal>
				<Modal
					className="bigStream"
					key={"bigStream"}
					show={this.props.modalsReducer.modals["bigStream"]}
					onAbort={() => {}}
					onClose={() => {
						this.props.dispatch(modalClose("bigStream"));
						this.setState({ bigStreamPlaying: false });
						this.setState({ bigStream: null });
					}}
				>
					{this.state.bigStream !== null ? (
						this.state.bigStreamPlaying ? (
							<HlsVideo
								src={
									this.props.streamReducer.streams[
										this.state.bigStream
									].streamUrl
								}
							/>
						) : (
							<Stream
								style={{ background: "black" }}
								key={this.state.bigStream}
								stream={
									this.props.streamReducer.streams[
										this.state.bigStream
									]
								}
								refresh={() =>
									this.updateStream(this.state.bigStream)
								}
								popout={() => {
									this.setState({ bigStreamPlaying: true });
								}}
							/>
						)
					) : null}
				</Modal>
			</div>
		);
	}
}

export default connect(state => state)(App);
