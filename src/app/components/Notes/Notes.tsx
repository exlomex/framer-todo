import { classNames } from '@/app/lib/classNames';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/store/config';
import { useEffect, useState } from 'react';
import { NoteActions } from '@/app/store/reducers/NoteSlice';
import { Note } from '@/app/components/ui/Note';
import cls from './Notes.module.scss';

interface NotesProps {
    className?: string;
}

export const Notes = (props: NotesProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    let notes = useSelector((state: StateSchema) => state.notes);

    const search = useSelector((state: StateSchema) => state.search.query);

    useEffect(() => {
        dispatch(NoteActions.changeStatus({ id: 1 }));
        dispatch(NoteActions.changeTitle({ id: 1, title: '3131312' }));
        dispatch(NoteActions.addNote({
            id: 2, title: '3131312', status: false, editStatus: false,
        }));
        dispatch(NoteActions.addNote({
            id: 3, title: '313dghjfjhfg1312', status: false, editStatus: false,
        }));
        dispatch(NoteActions.addNote({
            id: 4, title: 'ghfdg', status: false, editStatus: false,
        }));
    }, [dispatch]);

    notes = notes.filter((note) => note.title.includes(search));

    return (
        <div className={classNames(cls.Notes, {}, [className])}>
            {notes.map((note) => (
                <Note key={note.id} status={note.status} title={note.title} id={note.id}/>
            ))}
        </div>
    );
};
