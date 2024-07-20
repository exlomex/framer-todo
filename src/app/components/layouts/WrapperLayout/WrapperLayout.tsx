import { classNames } from '@/app/components/lib/ClassNames';
import { ReactNode } from 'react';
import cls from './WrapperLayout.module.scss';

interface WrapperLayoutProps {
    classname?: string;
    children: ReactNode;
}
export const WrapperLayout = (props: WrapperLayoutProps) => {
    const { classname, children } = props;
    return (
        <div className={classNames(cls.wrapper, {}, [classname])}>{children}</div>
    );
};
