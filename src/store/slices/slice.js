// * a slice is a part of an application state in which we keep all related state & reducers. Ex. UserSlice, ArticleSlice, AuthSlice , etc 
// read : https://redux-toolkit.js.org/api/createSlice

import { createSlice } from "@reduxjs/toolkit"
import { ClearUsers } from "../actions"

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) {
            let userToDelete = action.payload
            state.splice(userToDelete, 1)
        },
    },

    // the reducer which you want to use in other slices 
    extraReducers(builder) {
        builder.addCase(ClearUsers, () => [])
    }
})


export { userSlice }
export const { addUser, removeUser } = userSlice.actions