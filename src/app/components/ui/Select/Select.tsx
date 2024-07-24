import { classNames } from '@/app/lib/classNames';
import React, {
    ChangeEvent,
    memo,
} from 'react';
import {
    Select as HSelect,
} from '@headlessui/react';
import { filterValues } from '@/app/store/reducers/FilterSliceSchema';
import cls from './Select.module.scss';
import '@/app/styles/headlessStyles.css';

export interface SelectItem {
    value?: filterValues;
}

interface DropDownProps {
    className?: string;
    items: SelectItem[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = memo((props: DropDownProps) => {
    const {
        className,
        items,
        onChange,
    } = props;

    return (
        <HSelect className={classNames(cls.Select, {}, [className])} onChange={onChange}>

            {items.map((item, index) => (
                <option
                    key={index}
                    value={item.value}
                >
                    {item.value}
                </option>
            ))}

        </HSelect>
    );
});
