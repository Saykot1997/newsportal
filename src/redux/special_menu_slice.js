import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    SpecialMenu: null,
    isLoading: false,
    error: "",
}

export const SpecialMenuSlice = createSlice({
    name: 'SpecialMenu',
    initialState,
    reducers: {
        SpecialMenuFatched: (state, action) => {
            state.isLoading = false;
            state.SpecialMenu = action.payload;
        }
    },
})

export const { SpecialMenuFatched } = SpecialMenuSlice.actions

export default SpecialMenuSlice.reducer