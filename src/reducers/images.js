import { LOADED, LOADING, ERRORED } from "../types/images";

const initState = {};

function remove(arr, idx) {
	return arr.slice(0, idx).concat(arr.slice(idx + 1));
}

export default (state = initState, action) => {
	switch (action.type) {
		case LOADED:
			return {
				...state,
				[action.url]: true
			};
		case LOADING:
		case ERRORED:
			return {
				...state,
				[action.url]: false
			};
		default:
			return state;
	}
};
