import { classNames } from '@/app/lib/classNames';
import AddIconSVG from '@/app/assets/add.svg';

interface SearchIconProps{
    className?: string;
}

export const AddIcon = (props: SearchIconProps) => {
    const { className } = props;
    return (
        <AddIconSVG className={classNames('', {}, [className])}/>
    );
};
