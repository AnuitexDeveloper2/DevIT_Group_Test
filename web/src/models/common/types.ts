export interface SelectData {
    id: string;
    name: string;
}

export enum SortDirection {
    NONE = '',
    ASC = 'asc',
    DESC = 'desc',
}

export interface ModalProps {
    isOpen: boolean;
    handleCancel: () => void;
}
