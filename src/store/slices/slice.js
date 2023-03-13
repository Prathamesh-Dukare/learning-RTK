import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser(state, action) {
            console.log("adding user")
            state.push(action.payload)
        },
        removeUser(state, action) {
            console.log("removing user")
        },
    }
})


export { userSlice }
export const { addUser, removeUser } = userSlice.actions