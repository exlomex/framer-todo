export interface Note {
    id: number | string;
    title: string;
    status: boolean;
    editStatus: boolean;
}
export type NoteSliceSchema = Note[]
