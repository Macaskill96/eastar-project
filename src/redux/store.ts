import {configureStore} from "@reduxjs/toolkit";
import {novaReducer} from "./slices";

const store = configureStore({
    reducer: {
        nova: novaReducer
    }
})

export { store }