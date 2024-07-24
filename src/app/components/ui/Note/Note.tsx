import { classNames } from '@/app/lib/classNames';
import { CheckBox } from '@/app/components/ui/CheckBox';
import { EditIcon } from '@/app/components/Icons/ui/EditIcon';
import { DeleteIcon } from '@/app/components/Icons/ui/DeleteIcon';
import { AddIcon } from '@/app/components/Icons/ui/AddIcon';
import { NoteTitle } from '@/app/components/ui/NoteTitle';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { NoteActions } from '@/app/store/reducers/NoteSlice';
import { useState } from 'react';
import cls from './Note.module.scss';

interface NoteProps {
    className?: string;
    id: number;
    title: string;
    status: boolean;
    editStatus: boolean;
}

export const Note = (props: NoteProps) => {
    const dispatch = useAppDispatch();

    const {
        className, status, id, title, editStatus,
    } = props;

    const [name, setName] = useState(title);

    const onEditClickHandler = () => {
        if (editStatus) {
            dispatch(NoteActions.changeTitle({ title: name, id }));
        }
        dispatch(NoteActions.changeEditStatus({ id }));
    };
    const onDeleteClickHandler = () => {
        dispatch(NoteActions.removeNote({ id }));
    };

    const mods = {
        [cls.status]: status,
        [cls.inputVisible]: editStatus,
    };

    return (
        <div className={classNames(cls.Note, {}, [className])}>
            <div className={cls.leftSideNote}>
                <CheckBox id={id} status={status}/>
                <NoteTitle
                    className={classNames(cls.noteTitle, mods, [])}
                    value={name}
                    onChange={setName}
                    title={title}
                />
            </div>
            <div className={cls.rightSideNote}>
                <EditIcon onClick={onEditClickHandler}/>
                <DeleteIcon onClick={onDeleteClickHandler}/>
            </div>
        </div>
    );
};
