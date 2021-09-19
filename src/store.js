import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as reduxFormReducer } from "redux-form";

import {
  categoryListReducer,
  categorytDetailsReducer,
} from "./reducers/categoryReducer";

const initialState = {
  categoryList: {},
};
const reducer = combineReducers({
  categoryList: categoryListReducer,
  categoryDetails: categorytDetailsReducer,
    form: reduxFormReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
