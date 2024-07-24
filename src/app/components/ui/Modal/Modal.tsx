import {
    Description, Dialog, DialogPanel, DialogTitle, Transition,
} from '@headlessui/react';
import { classNames } from '@/app/lib/classNames';
import React, { useState } from 'react';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { NoteActions } from '@/app/store/reducers/NoteSlice';
import { Note, NoteSliceSchema } from '@/app/store/reducers/NoteSliceSchema';
import { v4 as uuidv4 } from 'uuid';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen: boolean
    onClose: () => void
}

export const Modal = (props: ModalProps) => {
    const { className, isOpen, onClose } = props;

    const [inputValue, setInputValue] = useState('');

    const dispatch = useAppDispatch();

    const noteTemplate: Partial<Note> = {
        status: false,
        editStatus: false,
    };
    const onSendHandler = () => {
        if (inputValue.trim()) {
            noteTemplate.title = inputValue.trim();
            noteTemplate.id = uuidv4();
            dispatch(NoteActions.addNote(noteTemplate as Note));
            onClose();
            setInputValue('');
        }
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <Dialog as='div' open={isOpen} onClose={onClose} className={classNames(cls.Modal, {}, [className])} transition>
            <DialogPanel className={cls.modalInner} transition>
                <DialogTitle className={cls.modalTitle}>Добавить заметку</DialogTitle>
                <input type="text" className={cls.modalInput} placeholder={'Введите заметку'} value={inputValue} onChange={onChangeHandler}/>
                <div className={cls.modalButtons}>
                    <button>Отменить</button>
                    <button onClick={onSendHandler}>Добавить</button>
                </div>
            </DialogPanel>
        </Dialog>
    );
};
