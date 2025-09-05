import { createSlice } from "@reduxjs/toolkit";

const initialUser = JSON.parse(localStorage.getItem("user")) || null;

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: initialUser,
    },
    reducers : {
        signUp : (state, action)=>{
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        login : (state, action) =>{
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state, action) =>{
            state.user = null;
            localStorage.removeItem("user");
        }
    }
})

export default userSlice.reducer;

export const{signUp, login, logout} = userSlice.actions;