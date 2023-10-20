import { createStore, combineReducers } from "redux";
import Reducers from "./reducers";

const rootReducer = combineReducers({
  data: Reducers, 
});

const store = createStore(rootReducer);

export default store;
