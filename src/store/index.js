import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/slice";

const store = configureStore({
    reducer: {
        users: userSlice.reducer
    }
})

export default store;