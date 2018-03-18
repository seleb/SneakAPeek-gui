import {
	createStore,
	combineReducers,
	applyMiddleware
} from "redux";
import streamReducer from "./reducers/stream";
import imagesReducer from "./reducers/images";
import modalsReducer from "./reducers/modals";
import thunk from "redux-thunk";

const reducer = combineReducers({
	streamReducer,
	imagesReducer,
	modalsReducer
});

const store = createStore(
	reducer,
	applyMiddleware(thunk)
);

export default store;
