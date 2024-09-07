import { createSlice } from "@reduxjs/toolkit";

const initialBlogState = {
    showBlogType: false,
    showFollowers: false,
    showFollowings: false,
    showDelete: false,
}

const blogSlice = createSlice({
    name: 'blog',
    initialState: initialBlogState,
    reducers: {
        toggleBlogType(state) {
            state.showBlogType = !state.showBlogType;
        },
        toggleFollowers(state) {
            state.showFollowers = !state.showFollowers;
        },
        toggleFollowings(state) {
            state.showFollowings = !state.showFollowings;
        },
        toggleDelete(state) {
            state.showDelete = !state.showDelete;
        }
    },
});

export default blogSlice.reducer;
export const blogActions = blogSlice.actions;