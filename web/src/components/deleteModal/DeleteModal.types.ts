import { AsyncThunk, AsyncThunkAction, PayloadAction } from '@reduxjs/toolkit';

export interface DeleteModalProps {
    isOpen: boolean;
    closeModal: () => void;
    reload: () => void;
    text: string;
    title: string;
    itemId?: number;
}
