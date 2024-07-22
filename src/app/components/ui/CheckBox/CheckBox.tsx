import { useCallback, useEffect, useState } from 'react';
import { Checkbox } from '@headlessui/react';
import { classNames } from '@/app/lib/ClassNames';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { NoteActions } from '@/app/store/reducers/NoteSlice';
import cls from './CheckBox.module.scss';

interface CheckBoxProps {
    className?: string;
    id: number;
    status: boolean;
}
export const CheckBox = (props: CheckBoxProps) => {
    const { className, id, status } = props;

    const dispatch = useAppDispatch();

    const checkboxHandler = useCallback(() => {
        dispatch(NoteActions.changeStatus({ id }));
    }, [dispatch, id]);

    return (
        <Checkbox
            checked={status}
            onChange={checkboxHandler}
            className={classNames(cls.CheckBox, {}, [className])}
        >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24px"
                width="23px" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
            </svg>
        </Checkbox>
    );
};
