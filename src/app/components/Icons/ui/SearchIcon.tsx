import { classNames } from '@/app/lib/classNames';
import SearchIconSVG from '@/app/assets/search.svg';

interface SearchIconProps{
    className?: string;
}

export const SearchIcon = (props: SearchIconProps) => {
    const { className } = props;
    return (
        <SearchIconSVG className={classNames('', {}, [className])}/>
    );
};
