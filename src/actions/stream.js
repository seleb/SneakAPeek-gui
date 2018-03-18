import { REMOVE_STREAM, ADD_STREAM, UPDATE_STREAMS } from "./../types/stream";

const streamArrayToMap = (result, stream) => {
	result[stream.name] = stream;
	return result;
};

export const removeStream = idx => {
	return dispatch => {
		dispatch({
			type: REMOVE_STREAM,
			payload: {
				idx
			}
		});
	};
};

export const addStream = channelName => {
	return dispatch => {
		dispatch({
			type: ADD_STREAM,
			payload: {
				channelName
			}
		});
	};
};

export const getStreams = channels => {
	return dispatch => {
		dispatch({
			type: UPDATE_STREAMS,
			payload: {
				streams: channels
					.map(channelName => {
						return {
							name: channelName,
							imgUrl: null
						};
					})
					.reduce(streamArrayToMap, {})
			}
		});

		return fetch(
			`http://localhost:3000/api/streams?streams=${JSON.stringify(
				channels
			)}`
		)
			.then(response => {
				return response.json();
			})
			.then(json => {
				// update each image
				const d = Date.now();
				for (let s in json.streams) {
					const stream = json.streams[s];
					stream.imgUrl = `${stream.imgUrl}?${d}`;
				}
				if (!json.streams) {
					json.streams = channels.reduce((result, stream) => {
						result[stream] = {
							name: stream,
							imgUrl: null,
							streamUrl: null,
							success: false
						};
						return result;
					}, {});
				}
				dispatch({
					type: UPDATE_STREAMS,
					payload: {
						streams: json.streams
					}
				});
			});
	};
};
