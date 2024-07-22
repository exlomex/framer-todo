import { classNames } from '@/app/lib/classNames';
import DeleteIconSVG from '@/app/assets/delete.svg';

interface DeleteIconProps{
    className?: string;
}

export const DeleteIcon = (props: DeleteIconProps) => {
    const { className } = props;
    return (
        <DeleteIconSVG className={classNames('', {}, [className])}/>
    );
};
