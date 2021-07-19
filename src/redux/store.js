import { createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
  auth: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {},
};

const store = createStore(reducer, initialState);

store.subscribe(() => console.log(store.getState()));

export default store;
