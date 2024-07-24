import { createSelector } from 'reselect';
import { getFilter } from '@/app/store/selectors/getFilter';
import { FilterSliceSchema } from '../reducers/FilterSliceSchema';

export const getFilterValue = createSelector(
    getFilter,
    (search: FilterSliceSchema) => search.value,
);
