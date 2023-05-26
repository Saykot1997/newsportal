import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    HeaderSubMenuData: null,
    isLoading: false,
    error: "",
}

export const HeaderSubMenuDataSlice = createSlice({
    name: 'HeaderSubMenuData',
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true;
        },
        headerSubmenuDataFatched: (state, action) => {
            state.isLoading = false;
            state.HeaderSubMenuData = action.payload;
        },
        headerSubmenuDataFatchedFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})

export const { loading, headerSubmenuDataFatched, headerSubmenuDataFatchedFailed } = HeaderSubMenuDataSlice.actions

export default HeaderSubMenuDataSlice.reducer