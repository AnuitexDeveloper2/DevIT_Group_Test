export interface ModalFooterProps {
    submit: (data?: any) => void;
    cancel: () => void;
    action: string;
    primaryProps?: any;
    cancelProps?: any;
    cancelText?: string | undefined;
    cancelButtonWidth?: number;
    actionButtonWidth?: number;
}
