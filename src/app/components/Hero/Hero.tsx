import { classNames } from '@/app/lib/classNames';
import { Search } from '@/app/components/ui/Search';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import React, { ChangeEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { SearchActions } from '@/app/store/reducers/SearchSlice';
import { getSearchQuery } from '@/app/store/selectors/getSearchQuery';
import { SelectItem } from '@/app/components/ui/Select/Select';
import { FilterActions } from '@/app/store/reducers/FilterSlice';
import { filterValues } from '@/app/store/reducers/FilterSliceSchema';
import { Select } from '../ui/Select';
import cls from './Hero.module.scss';

interface HeroProps {
    className?: string;
}

export const Hero = (props: HeroProps) => {
    const { className } = props;

    const query = useSelector(getSearchQuery);
    const dispatch = useAppDispatch();
    const handleQueryChanging = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SearchActions.changeQuery(e.target.value));
    }, [dispatch]);

    const DropDownItems: SelectItem[] = [
        {
            value: filterValues.ALL,
        },
        {
            value: filterValues.COMPLETED,
        },
        {
            value: filterValues.UNCOMPLETED,
        },
    ];

    const onFilterChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(FilterActions.changeFilter(e.target.value as filterValues));
    }, [dispatch]);

    return (
        <div className={classNames(cls.Hero, {}, [className])}>
            <h1 className={cls.headerName}>TODO лист</h1>
            <div className={cls.searchContainer}>
                <Search placeholder={'Поиск...'} value={query} onChange={handleQueryChanging}/>
                <Select items={DropDownItems} onChange={onFilterChangeHandler}/>
            </div>
        </div>
    );
};
