export interface Note {
    id: number;
    title: string;
    status: boolean;
    editStatus: boolean;
}
export type NoteSliceSchema = Note[]
