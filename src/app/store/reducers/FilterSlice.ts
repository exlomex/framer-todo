import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceSchema, filterValues } from '@/app/store/reducers/FilterSliceSchema';

const initialState: FilterSliceSchema = {
    value: filterValues.ALL,
};
export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (
            state: FilterSliceSchema,
            action: PayloadAction<filterValues>,
        ) => {
            state.value = action.payload;
        },
    },
});

export const { actions: FilterActions } = FilterSlice;
export const { reducer: FilterReducer } = FilterSlice;
