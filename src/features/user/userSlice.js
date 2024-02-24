import { createSlice } from "@reduxjs/toolkit";
import { createUsersAPI, getUsersAPI, getUsersByAPI, updateUsersAPI } from "./userAPI";

const initialState = {
    users: [],
    user: {},
    data: [
        {
            name: "html 1",
            desc: "html 1 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "html 2",
            desc: "html 2 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "html 3",
            desc: "html 3 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "html 4",
            desc: "html 4 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "css 1",
            desc: "css 1Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "css 2",
            desc: "css 2 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "css 3",
            desc: "css 3 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "css 4",
            desc: "css 4 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "js 1",
            desc: "js 1 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "js 2",
            desc: "js 2 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "js 3",
            desc: "js 3 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "js 4",
            desc: "js 4 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "java 1",
            desc: "java 1 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "java 2",
            desc: "java 2 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "java 3",
            desc: "java 3Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "java 4",
            desc: "java 4 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "node 1",
            desc: "node 1 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "node 2",
            desc: "node 2 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "node 3",
            desc: "node 3 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            name: "node 4",
            desc: "node 4 Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ],
    inner: {}
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        filterinner: (state, action) => {
            state.inner = state.data.find((elm) => elm.name == action.payload);
        }
    },
    extraReducers: (build) => {
        build.addCase(getUsersAPI.fulfilled, (state, action) => {
            state.users = action.payload;
        }).addCase(getUsersByAPI.fulfilled, (state, action) => {
            state.user = action.payload;
        }).addCase(updateUsersAPI.fulfilled, (state, action) => {
            state.user = action.payload;
        }).addCase(createUsersAPI.fulfilled, (state, action) => {
            state.users.push(action.payload);
        });
    }
});

export default userSlice.reducer;
export const selectUser = (state) => state.user;
export const { filterinner } = userSlice.actions;
