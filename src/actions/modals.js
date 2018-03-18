import { OPEN, CLOSE } from "../types/modals";

export function open(key) {
	return {
		type: OPEN,
		payload: { key }
	};
}
export function close(key) {
	return {
		type: CLOSE,
		payload: { key }
	};
}
