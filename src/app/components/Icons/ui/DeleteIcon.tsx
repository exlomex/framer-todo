import { classNames } from '@/app/lib/classNames';
import DeleteIconSVG from '@/app/assets/delete.svg';

interface DeleteIconProps{
    className?: string;
    onClick?: () => void
}

export const DeleteIcon = (props: DeleteIconProps) => {
    const { className, onClick } = props;
    return (
        <DeleteIconSVG className={classNames('', {}, [className])} onClick={onClick}/>
    );
};
