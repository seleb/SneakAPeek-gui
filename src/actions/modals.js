import { OPEN, CLOSE } from "../types/modals";

export function open(modal) {
	return {
		type: OPEN,
		payload: { modal }
	};
}
export function close(idx) {
	return {
		type: CLOSE,
		payload: { idx }
	};
}
