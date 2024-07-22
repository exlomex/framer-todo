import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchSliceSchema } from './SearchSliceSchema';

const initialState: SearchSliceSchema = {
    query: '',
};
export const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeQuery: (
            state: SearchSliceSchema,
            action: PayloadAction<string>,
        ) => {
            state.query = action.payload;
        },
    },
});

export const { actions: SearchActions } = SearchSlice;
export const { reducer: SearchReducer } = SearchSlice;
