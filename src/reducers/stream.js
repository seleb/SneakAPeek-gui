import {
	REMOVE_STREAM,
	ADD_STREAM,
	UPDATE_STREAMS,
	INVALIDATE_STREAMS
} from "../types/stream";

const initState = {
	streams: []
};

function remove(arr, idx) {
	return arr.slice(0, idx).concat(arr.slice(idx + 1));
}

export default (state = initState, action) => {
	switch (action.type) {
		case REMOVE_STREAM:
			return {
				...state,
				streams: remove(state.streams, action.payload.idx)
			};
		case ADD_STREAM:
			return {
				...state,
				streams: state.streams.concat({
					name: action.payload.channelName
				})
			};
		case UPDATE_STREAMS: {
			let streams = state.streams.map(stream => {
				if (action.payload.streams[stream.name]) {
					return Object.assign(
						{},
						action.payload.streams[stream.name]
					);
				}
				return stream;
			});
			return {
				...state,
				streams: streams
			};
		}
		case INVALIDATE_STREAMS: {
			let streams = state.streams.map(stream => {
				return {
					...stream,
					invalid: action.payload.streams[stream.name]
				};
			});
			return {
				...state,
				streams: streams
			};
		}
		default:
			return state;
	}
};
