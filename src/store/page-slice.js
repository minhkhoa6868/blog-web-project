import { createSlice } from "@reduxjs/toolkit";

const initialPageState = {
    active: 'home',
}

const pageSlice = createSlice({
    name: 'page',
    initialState: initialPageState,
    reducers: {
        setActive(state, action) {
            state.active = action.payload;
        }
    }
});

export default pageSlice.reducer;
export const pageActions = pageSlice.actions;