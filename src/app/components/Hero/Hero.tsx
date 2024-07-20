import { classNames } from '@/app/components/lib/classNames';
import { Search } from '@/app/components/ui/Search';
import cls from './Hero.module.scss';

interface HeroProps {
    className?: string;
}

export const Hero = (props: HeroProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Hero, {}, [className])}>
            <h1 className={cls.headerName}>TODO лист</h1>
            <div className={cls.searchContainer}>
                <Search placeholder={'Поиск...'}/>
                <div>13131</div>
            </div>
        </div>
    );
};
