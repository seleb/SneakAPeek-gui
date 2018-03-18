import { LOADED, LOADING, ERRORED } from "../types/images";

const initState = {};

export default (state = initState, action) => {
	switch (action.type) {
		case LOADED:
			return {
				...state,
				[action.url]: {
					loaded: true,
					errored:false
				}
			};
		case LOADING:
			return {
				...state,
				[action.url]: {
					loaded: false,
					errored: false
				}
			};
		case ERRORED:
			return {
				...state,
				[action.url]: {
					loaded: true,
					errored: true
				}
			};
		default:
			return state;
	}
};
