import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        loginSuccess: (state, { payload: { data } }) => {
            state.loading = false;
            state.user = data;
        },
        registerSuccess: (state, { payload: { data } }) => {
            state.loading = false;
            state.user = data;
        },
        logoutSuccess: (state) => {
            state.loading = false;
            state.user = null;
        },
        fetchFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchStart,
    loginSuccess,
    registerSuccess,
    logoutSuccess,
    fetchFailure,
} = authSlice.actions;

export default authSlice.reducer;
