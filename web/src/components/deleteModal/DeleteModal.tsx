import React from 'react';
import { Form } from 'antd';
import { DeleteModalText, DeleteProjectModal } from './DeleteModal.styles';
import ModalTitle from '../shared/modalTitle/ModalTitle';
import ModalFooter from '../shared/modalFooter/ModalFooter';

interface Props {
    isOpen: boolean;
    closeModal: () => void;
    reload: () => void;
    text: string;
    title: string;
}
const DeleteModal: React.FC<Props> = ({ isOpen, closeModal, reload, text, title }) => {
    const handleCancel = () => {
        closeModal();
    };

    const onDelete = () => {
        reload();
    };

    return (
        <DeleteProjectModal open={isOpen} onCancel={handleCancel} centered footer={null}>
            <Form onFinish={onDelete}>
                <ModalTitle title={`Delete ${title}`} />
                <DeleteModalText>Are you sure you want to delete {text} ?</DeleteModalText>
                <ModalFooter cancel={handleCancel} submit={() => {}} action="Delete" />
            </Form>
        </DeleteProjectModal>
    );
};

export default DeleteModal;
