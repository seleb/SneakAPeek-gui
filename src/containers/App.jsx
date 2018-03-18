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

class App extends Component {
	removeStream(idx) {
		this.props.dispatch(removeStream(idx));
	}
	openAddStreamModal() {
		this.props.dispatch(
			modalOpen({
				visible: true,
				content: <input type="text" />
			})
		);
	}
	addStream() {
		// TODO: make this launch a modal or something to enter stream info
		this.props.dispatch(addStream("test.png"));
	}
	getStreams() {
		this.props.dispatch(getStreams());
	}

	render() {
		return (
			<div className="app">
				<Header />
				<button
					onClick={() => this.getStreams()}
					style={{ height: "4em", backgroundColor: "white", color:"black" }}
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
				{this.props.modalsReducer.modals.map((modal, idx) => (
					<Modal
						key={idx}
						show={modal.visible}
						onSubmit={() => this.addStream()}
						onAbort={() => console.log("abort")}
						onClose={() => {
							this.props.dispatch(modalClose(idx));
						}}
					>
						{modal.content}
					</Modal>
				))}
			</div>
		);
	}
}

export default connect(state => state)(App);
