import { NoteSliceSchema } from '@/app/store/reducers/NoteSliceSchema';
import { SearchSliceSchema } from '@/app/store/reducers/SearchSliceSchema';

export interface StateSchema {
    notes: NoteSliceSchema
    search: SearchSliceSchema
}
