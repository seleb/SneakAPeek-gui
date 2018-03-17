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
		// hardcode for now
		var channels = ['loltyler1', 'solary', 'c9sneaky', 'sparcmaclived', 'hashinshin'];
		dispatch({
			type: GET_STREAMS,
			payload: {
				streams: channels.map(stream => {
					return {
						...stream,
						img: null
					};
				})
			}
		});

		return fetch(`http://localhost:3000/api/streams?streams=${JSON.stringify(channels)}`).then(response => {
			return response.json();
		}).then(json => {
			// update each image
			const d = Date.now();
			for(let stream in json.streams){
				json.streams[stream].img = `${json.streams[stream].img}?${d}`;
			};
			dispatch({
				type: GET_STREAMS,
				payload: {
					streams: Object.entries(json.streams).map((i) => i[1])
				}
			});
		});

	}
};