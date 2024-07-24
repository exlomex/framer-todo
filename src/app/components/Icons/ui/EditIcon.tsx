import { classNames } from '@/app/lib/classNames';
import EditIconSVG from '@/app/assets/edit.svg';

interface EditIconProps{
    className?: string;
    onClick?: () => void
}

export const EditIcon = (props: EditIconProps) => {
    const { className, onClick } = props;
    return (
        <EditIconSVG className={classNames('', {}, [className])} onClick={onClick}/>
    );
};
