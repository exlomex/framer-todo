import { classNames } from '@/app/lib/classNames';
import { CheckBox } from '@/app/components/ui/CheckBox';
import { EditIcon } from '@/app/components/Icons/ui/EditIcon';
import { DeleteIcon } from '@/app/components/Icons/ui/DeleteIcon';
import { NoteTitle } from '@/app/components/ui/NoteTitle';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { NoteActions } from '@/app/store/reducers/NoteSlice';
import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import cls from './Note.module.scss';

interface NoteProps {
    className?: string;
    id: number | string;
    title: string;
    status: boolean;
    editStatus: boolean;
}

export const Note = forwardRef((props: NoteProps, ref) => {
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
        <div ref={ref} className={classNames(cls.Note, {}, [className])}>
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
});

export const MNote = motion(Note);
