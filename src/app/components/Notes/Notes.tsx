import { classNames } from '@/app/lib/classNames';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NoteActions } from '@/app/store/reducers/NoteSlice';
import { getSearchQuery } from '@/app/store/selectors/getSearchQuery';
import { getNotes } from '@/app/store/selectors/getNotes';
import { getFilterValue } from '@/app/store/selectors/getFilterValue';
import { filterValues } from '@/app/store/reducers/FilterSliceSchema';
import { Note as TNote } from '@/app/store/reducers/NoteSliceSchema';
import { Note } from '@/app/components/ui/Note';
import cls from './Notes.module.scss';

interface NotesProps {
    className?: string;
}

export const Notes = (props: NotesProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    let notes = useSelector(getNotes);

    const search = useSelector(getSearchQuery);

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

    const filterValue = useSelector(getFilterValue);

    const filterValuesCases = (note: TNote) => {
        switch (filterValue) {
        case filterValues.ALL: {
            return note;
        } case filterValues.UNCOMPLETED: {
            return !note.status;
        } case filterValues.COMPLETED: {
            return note.status;
        }
        default: return false;
        }
    };

    notes = notes.filter((note) => note.title.includes(search)).filter(filterValuesCases);

    return (
        <div className={classNames(cls.Notes, {}, [className])}>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    status={note.status}
                    title={note.title} id={note.id}
                    editStatus={note.editStatus}/>
            ))}
        </div>
    );
};
