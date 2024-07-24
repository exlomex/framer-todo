import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NoteSliceSchema } from '@/app/store/reducers/NoteSliceSchema';
import { LOCAL_STORAGE_NOTES } from '@/app/const/localstorage';

const initialState: NoteSliceSchema = [
];
export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes: (
            state: NoteSliceSchema,
            action: PayloadAction<NoteSliceSchema>,
        ) => {
            for (let i = state.length - 1; i >= 0; i--) {
                state.splice(i, 1);
            }
            for (let i = 0; i < action.payload.length; i++) {
                state.push(action.payload[i]);
            }
        },
        changeTitle: (
            state: NoteSliceSchema,
            action: PayloadAction<{id: number | string, title: string}>,
        ) => {
            const note = state.find((note) => note.id === action.payload.id);
            if (note) note.title = action.payload.title;
            localStorage.setItem(LOCAL_STORAGE_NOTES, JSON.stringify(state));
        },
        changeStatus: (
            state: NoteSliceSchema,
            action: PayloadAction<{id: number | string}>,
        ) => {
            const note = state.find((note) => note.id === action.payload.id);
            if (note) note.status = !note.status;
            localStorage.setItem(LOCAL_STORAGE_NOTES, JSON.stringify(state));
        },
        changeEditStatus: (
            state: NoteSliceSchema,
            action: PayloadAction<{id: number | string}>,
        ) => {
            const note = state.find((note) => note.id === action.payload.id);
            if (note) note.editStatus = !note.editStatus;
            localStorage.setItem(LOCAL_STORAGE_NOTES, JSON.stringify(state));
        },
        addNote: (
            state: NoteSliceSchema,
            action: PayloadAction<Note>,
        ) => {
            state.push(action.payload);
            localStorage.setItem(LOCAL_STORAGE_NOTES, JSON.stringify(state));
        },
        removeNote: (
            state: NoteSliceSchema,
            action: PayloadAction<{id: number | string}>,
        ) => {
            const index = state.findIndex((note) => note.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem(LOCAL_STORAGE_NOTES, JSON.stringify(state));
        },
    },
});

export const { actions: NoteActions } = noteSlice;
export const { reducer: NoteReducer } = noteSlice;
