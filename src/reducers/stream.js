import {
	REMOVE_STREAM,
	ADD_STREAM,
	GET_STREAMS
} from "../types/stream";

const initState = {
	streams_url: []
};

function remove(arr, idx) {
	return arr.slice(0, idx).concat(arr.slice(idx + 1));
}

export default (state = initState, action) => {
	switch (action.type) {
		case REMOVE_STREAM:
			return {
				...state,
				streams_url: remove(state.streams_url, action.payload.idx)
			};
		case ADD_STREAM:
			return {
				...state,
				streams_url: state.streams_url.concat(action.payload.url)
			};
		case GET_STREAMS:
			// TODO: hook up to backend; update existing streams
			return {
				...state,
			}
		default:
			return state;
	}
};
