import { createStore, combineReducers, applyMiddleware } from "redux";
import streamReducer from "./reducers/stream";
import imagesReducer from "./reducers/images";
import modalsReducer from "./reducers/modals";
import thunk from "redux-thunk";

import { loadState, saveState } from "./localStorage";
import { getStreams } from "./actions/stream.js";

const reducer = combineReducers({
	streamReducer,
	imagesReducer,
	modalsReducer
});

const persistedState = loadState();
const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
	const state = store.getState();
	saveState({
		streamReducer: state.streamReducer
	});
});

// auto-refresh on boot
if (
	persistedState &&
	persistedState.streamReducer &&
	persistedState.streamReducer.streams
) {
	store.dispatch(
		getStreams(
			persistedState.streamReducer.streams.map(stream => stream.name)
		)
	);
}

export default store;
