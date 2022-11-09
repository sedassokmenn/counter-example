import { combineReducers } from "redux";//combinereducer:reducerleri bir araya getir.

import counterReducer from "./counterReducer";

const reducers= combineReducers({
    counterReducer
});

export default reducers;