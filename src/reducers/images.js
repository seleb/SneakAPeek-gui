import { LOADED, LOADING, ERRORED } from "../types/images";

const initState = {};

export default (state = initState, action) => {
	switch (action.type) {
		case LOADED:
			if (!action.url) {
				return {
					...state,
					[action.url]: {
						loaded: true,
						errored: true
					}
				};
			}
			return {
				...state,
				[action.url]: {
					loaded: true,
					errored: false
				}
			};
		case LOADING:
			if (!action.url) {
				return {
					...state,
					[action.url]: {
						loaded: true,
						errored: true
					}
				};
			}
			return {
				...state,
				[action.url]: {
					loaded: false,
					errored: false
				}
			};
		case ERRORED:
			if (!action.url) {
				return {
					...state,
					[action.url]: {
						loaded: true,
						errored: true
					}
				};
			}
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
