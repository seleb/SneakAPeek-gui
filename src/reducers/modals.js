import { OPEN, CLOSE } from "../types/modals";

const initState = {
	modals: []
};

export default (state = initState, action) => {
	switch (action.type) {
		case CLOSE: {
			const modals = state.modals.slice();
			modals[action.payload.key] = false;
			return {
				...state,
				modals: modals
			};
		}
		case OPEN: {
			const modals = state.modals.slice();
			modals[action.payload.key] = true;
			return {
				...state,
				modals: modals
			};
		}
		default:
			return state;
	}
};
