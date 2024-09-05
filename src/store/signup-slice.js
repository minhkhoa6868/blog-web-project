import { createSlice } from "@reduxjs/toolkit";

const initialSignupState = {
    isSignup: false,
    showWarning: false,
}

const signupSlice = createSlice({
    name: 'signup',
    initialState: initialSignupState,
    reducers: {
        hasSignup(state) {
            state.isSignup = true;
        },
        toggleShow(state) {
            state.showWarning = !state.showWarning;
        }
    },
});

export const signupActions = signupSlice.actions;

export default signupSlice.reducer;