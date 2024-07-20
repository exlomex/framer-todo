import { classNames } from '@/app/components/lib/classNames';
import React, { InputHTMLAttributes, useCallback } from 'react';
import { SearchIcon } from '@/app/components/Icons/ui/SearchIcon';
import cls from './Search.module.scss';

type HtmlInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface SearchProps extends HtmlInputProps{
    className?: string;
    value?: string
    onChange?: (value: string) => void;
}

export const Search = (props: SearchProps) => {
    const {
        className, value, onChange, ...additional
    } = props;

    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);

    return (
        <div className={cls.SearchWrapper}>
            <input
                className={classNames(cls.Search, {}, [className])}
                value={value}
                onChange={onChangeHandler}
                {...additional}
            />
            <SearchIcon className={cls.searchIcon}/>
        </div>
    );
};
