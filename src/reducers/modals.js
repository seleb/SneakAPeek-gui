import { OPEN, CLOSE } from "../types/modals";

const initState = {
	modals: []
};

export default (state = initState, action) => {
	switch (action.type) {
		case CLOSE:
			const modals = state.modals.slice();
			modals[action.payload.idx].visible = false;
			return {
				...state,
				modals: modals
			};
		case OPEN:
			return {
				...state,
				modals: state.modals.concat(action.payload.modal)
			};
		default:
			return state;
	}
};
