import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CompanyInfo: null,
    isLoading: false,
    error: "",
}

export const CompanyInfoDataSlice = createSlice({
    name: 'CompanyInfo',
    initialState,
    reducers: {
        companyInfoFatched: (state, action) => {
            state.isLoading = false;
            state.CompanyInfo = action.payload;
        }
    },
})

export const {  companyInfoFatched } = CompanyInfoDataSlice.actions

export default CompanyInfoDataSlice.reducer