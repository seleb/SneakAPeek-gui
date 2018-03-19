import {
	REMOVE_STREAM,
	ADD_STREAM,
	UPDATE_STREAMS,
	INVALIDATE_STREAMS
} from "./../types/stream";

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
			type: INVALIDATE_STREAMS,
			payload: {
				streams: channels.reduce((result, stream) => {
					result[stream] = true;
					return result;
				}, {})
			}
		});

		return fetch(
			`http://localhost:3000/api/streams?streams=${JSON.stringify(
				channels
			)}` // TODO: don't hard-code backend url
		)
			.then(response => {
				return response.json();
			})
			.then(json => {
				// update each image
				if (!json.streams) {
					return;
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
