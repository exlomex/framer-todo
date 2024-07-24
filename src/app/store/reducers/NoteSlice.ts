import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NoteSliceSchema } from '@/app/store/reducers/NoteSliceSchema';

const initialState: NoteSliceSchema = [
    {
        id: 1,
        status: false,
        title: 'default',
        editStatus: false,
    },
];
export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        changeTitle: (
            state: NoteSliceSchema,
            action: PayloadAction<{id: number, title: string}>,
        ) => {
            const note = state.find((note) => note.id === action.payload.id);
            if (note) note.title = action.payload.title;
        },
        changeStatus: (
            state: NoteSliceSchema,
            action: PayloadAction<{id: number}>,
        ) => {
            const note = state.find((note) => note.id === action.payload.id);
            if (note) note.status = !note.status;
        },
        changeEditStatus: (
            state: NoteSliceSchema,
            action: PayloadAction<{id: number}>,
        ) => {
            const note = state.find((note) => note.id === action.payload.id);
            if (note) note.editStatus = !note.editStatus;
        },
        addNote: (
            state: NoteSliceSchema,
            action: PayloadAction<Note>,
        ) => {
            state.push(action.payload);
        },
        removeNote: (
            state: NoteSliceSchema,
            action: PayloadAction<{id: number}>,
        ) => {
            const index = state.findIndex((note) => note.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { actions: NoteActions } = noteSlice;
export const { reducer: NoteReducer } = noteSlice;
