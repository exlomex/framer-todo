import { classNames } from '@/app/lib/classNames';
import React, { forwardRef, InputHTMLAttributes, useCallback } from 'react';
import { SearchIcon } from '@/app/components/Icons/ui/SearchIcon';
import { motion } from 'framer-motion';
import cls from './Search.module.scss';

type HtmlInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface SearchProps extends HtmlInputProps{
    className?: string;
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = forwardRef((props: SearchProps, ref) => {
    const {
        className, value, onChange, ...additional
    } = props;

    return (
        <div className={cls.SearchWrapper}>
            <input
                className={classNames(cls.Search, {}, [className])}
                value={value}
                onChange={onChange}
                {...additional}
            />
            <SearchIcon className={cls.searchIcon}/>
        </div>
    );
});
