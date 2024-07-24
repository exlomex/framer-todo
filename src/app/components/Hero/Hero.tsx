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
import { Select } from '@/app/components/ui/Select';
import { motion } from 'framer-motion';
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

    const textAnimation = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    };

    return (
        <motion.div
            className={classNames(cls.Hero, {}, [className])}
            initial="hidden"
            whileInView="visible"
        >
            <motion.h1
                variants={textAnimation} custom={0}
                className={cls.headerName}
            >
                TODO лист
            </motion.h1>
            <motion.div className={cls.searchContainer} custom={1} variants={textAnimation}>
                <Search placeholder={'Поиск...'} value={query} onChange={handleQueryChanging}/>
                <Select items={DropDownItems} onChange={onFilterChangeHandler}/>
            </motion.div>
        </motion.div>
    );
};
