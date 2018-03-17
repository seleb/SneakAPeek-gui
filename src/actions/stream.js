import {
	REMOVE_STREAM,
	ADD_STREAM,
	GET_STREAMS
} from './../types/stream';

export const removeStream = (idx) => {
	return dispatch => {
		dispatch({
			type: REMOVE_STREAM,
			payload: {
				idx
			}
		});
	}
};

export const addStream = (url) => {
	return dispatch => {
		dispatch({
			type: ADD_STREAM,
			payload: {
				url
			}
		});
	}
};

export const getStreams = (idx) => {
	return dispatch => {
		dispatch({
			type: GET_STREAMS
		});
	}
};