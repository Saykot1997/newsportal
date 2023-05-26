import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    MenuData:  null,
    isLoading: false,
    error: "",
}

export const MenuDataSlice = createSlice({
    name: 'MenuData',
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true;
        },
        menuDataFatched: (state, action) => {
            state.isLoading = false;
            state.MenuData = action.payload;
        },
        menuDataFatchedFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})

export const { loading, menuDataFatched, menuDataFatchedFailed } = MenuDataSlice.actions

export default MenuDataSlice.reducer