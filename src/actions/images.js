import { LOADED, LOADING, ERRORED } from "../types/images";

export function loading(url) {
	return {
		type: LOADING,
		url
	};
}
export function loaded(url) {
	return {
		type: LOADED,
		url
	};
}
export function errored(url) {
	return {
		type: ERRORED,
		url
	};
}
