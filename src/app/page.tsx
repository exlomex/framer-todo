'use client';

import { Hero } from '@/app/components/Hero';
import { Notes } from '@/app/components/Notes';
import { Modal } from '@/app/components/ui/Modal';
import {
    useCallback, useEffect, useLayoutEffect, useState,
} from 'react';
import { ModalAddButton } from '@/app/components/ui/ModalAddButton';
import { NoteSliceSchema } from '@/app/store/reducers/NoteSliceSchema';
import { LOCAL_STORAGE_NOTES } from '@/app/const/localstorage';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { NoteActions } from '@/app/store/reducers/NoteSlice';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const ModalButtonClickHandler = useCallback(() => {
        setIsOpen(true);
    }, []);

    const dispatch = useAppDispatch();
    useLayoutEffect(() => {
        const storedNotes = localStorage.getItem(LOCAL_STORAGE_NOTES);
        if (storedNotes) dispatch(NoteActions.setNotes(JSON.parse(storedNotes)));
    }, [dispatch]);

    return (
        <>
            <Hero/>
            <Notes/>
            <Modal
                isOpen={isOpen}
                onClose={() => { setIsOpen((prev) => !prev); }}
            />
            <ModalAddButton onOpen={ModalButtonClickHandler}/>
        </>
    );
}
