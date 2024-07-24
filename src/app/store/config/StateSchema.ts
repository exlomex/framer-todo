import { NoteSliceSchema } from '@/app/store/reducers/NoteSliceSchema';
import { SearchSliceSchema } from '@/app/store/reducers/SearchSliceSchema';
import { FilterSliceSchema } from '@/app/store/reducers/FilterSliceSchema';

export interface StateSchema {
    notes: NoteSliceSchema
    search: SearchSliceSchema
    filter: FilterSliceSchema
}
