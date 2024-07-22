import { classNames } from '@/app/lib/classNames';
import { Search } from '@/app/components/ui/Search';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import React, { useCallback, useEffect } from 'react';
import { NoteActions } from '@/app/store/reducers/NoteSlice';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/store/config';
import { Note, NoteSliceSchema } from '@/app/store/reducers/NoteSliceSchema';
import { SearchActions } from '@/app/store/reducers/SearchSlice';
import cls from './Hero.module.scss';

interface HeroProps {
    className?: string;
}

export const Hero = (props: HeroProps) => {
    const { className } = props;

    const query = useSelector((state: StateSchema) => state.search.query);
    const dispatch = useAppDispatch();
    const handleQueryChanging = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SearchActions.changeQuery(e.target.value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.Hero, {}, [className])}>
            <h1 className={cls.headerName}>TODO лист</h1>
            <div className={cls.searchContainer}>
                <Search placeholder={'Поиск...'} value={query} onChange={handleQueryChanging}/>
                <div>1</div>
            </div>
        </div>
    );
};
