import { AddIcon } from '@/app/components/Icons/ui/AddIcon';
import { classNames } from '@/app/lib/classNames';
import cls from './ModalAddButton.module.scss';

interface ModalAddButtonProps {
    className?: string;
    onOpen: () => void
}

export const ModalAddButton = (props: ModalAddButtonProps) => {
    const { className, onOpen } = props;
    return (
        <button className={classNames(cls.ModalAddButton, {}, [className])} onClick={onOpen}>
            <AddIcon/>
        </button>
    );
};
