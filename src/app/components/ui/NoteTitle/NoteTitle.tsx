import { classNames } from '@/app/lib/classNames';
import {
    ChangeEvent, useCallback, useEffect,
} from 'react';
import cls from './NoteTitle.module.scss';

interface NoteTitleProps {
    className?: string;
    title: string;
    value: string
    onChange: (value: string) => void
}

export const NoteTitle = (props: NoteTitleProps) => {
    const {
        className, title, value: name, onChange: setName,
    } = props;

    useEffect(() => {
        setName(title);
    }, [setName, title]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }, [setName]);

    return (
        <>
            <h2 className={classNames(cls.NoteTitle, {}, [className])}>
                {title}
            </h2>
            <input value={name} onChange={onChangeHandler} className={cls.nameInput}/>
        </>
    );
};
