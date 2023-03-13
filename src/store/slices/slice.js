import { createSlice } from "@reduxjs/toolkit"

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
    }
})


export { userSlice }
export const { addUser, removeUser } = userSlice.actions