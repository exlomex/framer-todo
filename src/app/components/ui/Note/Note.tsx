import { classNames } from '@/app/lib/classNames';
import { CheckBox } from '@/app/components/ui/CheckBox';
import { EditIcon } from '@/app/components/Icons/ui/EditIcon';
import { DeleteIcon } from '@/app/components/Icons/ui/DeleteIcon';
import { AddIcon } from '@/app/components/Icons/ui/AddIcon';
import cls from './Note.module.scss';

interface NoteProps {
    className?: string;
    id: number;
    title: string;
    status: boolean;
}

export const Note = (props: NoteProps) => {
    const {
        className, status, id, title,
    } = props;

    return (
        <div className={classNames(cls.Note, {}, [className])}>
            <div className={cls.leftSideNote}>
                <CheckBox id={id} status={status}/>
                <h2 className={classNames('', { [cls.status]: status }, [])}>{title}</h2>
            </div>
            <div>
                <EditIcon/>
                <DeleteIcon/>
            </div>
        </div>
    );
};
