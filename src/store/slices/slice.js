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
    extraReducers(builder) {
        builder.addCase(ClearUsers, () => [])
    }
})


export { userSlice }
export const { addUser, removeUser } = userSlice.actions