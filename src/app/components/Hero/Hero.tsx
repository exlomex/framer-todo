import { classNames } from '@/app/lib/classNames';
import { Search } from '@/app/components/ui/Search';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useEffect } from 'react';
import { NoteActions } from '@/app/store/reducers/NoteSlice';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/store/config';
import { Note, NoteSliceSchema } from '@/app/store/reducers/NoteSliceSchema';
import cls from './Hero.module.scss';

interface HeroProps {
    className?: string;
}

export const Hero = (props: HeroProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(NoteActions.changeStatus({ id: 1 }));
        dispatch(NoteActions.changeTitle({ id: 1, title: '3131312' }));
        dispatch(NoteActions.addNote({ id: 2, title: '3131312', status: true }));
        dispatch(NoteActions.removeNote({ id: 2 }));
    }, [dispatch]);

    const test = useSelector((state: StateSchema) => state.notes);

    return (
        <div className={classNames(cls.Hero, {}, [className])}>
            <h1 className={cls.headerName}>TODO лист</h1>
            <div className={cls.searchContainer}>
                <Search placeholder={'Поиск...'}/>
                <div>{JSON.stringify(test)}</div>
            </div>
        </div>
    );
};
