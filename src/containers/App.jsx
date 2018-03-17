import React, { Component } from 'react';

import { connect } from "react-redux";
import { removeStream, addStream, getStreams, streamError,streamLoad } from './../actions/stream';
import { Link } from 'react-router-dom';

import Stream from "../components/Stream.jsx";
import NewStream from "../components/NewStream.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

class App extends Component {
	removeStream = (idx) => {
		this.props.dispatch(removeStream(idx));
	}
	addStream = () => {
		// TODO: make this launch a modal or something to enter stream info
		this.props.dispatch(addStream("test.png"));
	}
	getStreams = () => {
		this.props.dispatch(getStreams());
	}

	render = () => {
		return (
			<div className="app">
				<Header />
				<button onClick={() => this.getStreams()} style={{ height: "4em", backgroundColor:"white" }}>Refresh</button>
				<section className="streams">
					{this.props.streamReducer.streams.map(
						(stream, idx) => (
							<Stream
								key={idx}
								src={stream}

								remove={() => this.removeStream(idx)}
							/>
						)
					)}
					<NewStream addStream={() => this.addStream()} />
				</section>
				<Footer />
			</div>
		);
	}
}

export default connect(state => state)(App);
