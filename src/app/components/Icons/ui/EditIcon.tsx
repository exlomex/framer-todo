import { classNames } from '@/app/lib/classNames';
import EditIconSVG from '@/app/assets/edit.svg';

interface EditIconProps{
    className?: string;
}

export const EditIcon = (props: EditIconProps) => {
    const { className } = props;
    return (
        <EditIconSVG className={classNames('', {}, [className])}/>
    );
};
