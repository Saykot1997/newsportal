import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    SocialAppLink: null,
    isLoading: false,
    error: "",
}

export const SocialAppLinkSlice = createSlice({
    name: 'SocialAppLink',
    initialState,
    reducers: {
        socialAppLinkFatched: (state, action) => {
            state.isLoading = false;
            state.SocialAppLink = action.payload;
        }
    },
})

export const { socialAppLinkFatched } = SocialAppLinkSlice.actions

export default SocialAppLinkSlice.reducer