import { SearchSliceSchema } from '@/app/store/reducers/SearchSliceSchema';
import { createSelector } from 'reselect';
import { getSearch } from './getSearch';

export const getSearchQuery = createSelector(
    getSearch,
    (search: SearchSliceSchema) => search.query,
);
