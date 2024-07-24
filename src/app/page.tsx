'use client';

import { Hero } from '@/app/components/Hero';
import { Notes } from '@/app/components/Notes';
import { Modal } from '@/app/components/ui/Modal';
import { useCallback, useState } from 'react';
import { ModalAddButton } from '@/app/components/ui/ModalAddButton';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const ModalButtonClickHandler = useCallback(() => {
        setIsOpen(true);
    }, []);

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
