import React from 'react';
import ModalFooter from '../shared/modalFooter/ModalFooter';
import ModalTitle from '../shared/modalTitle/ModalTitle';
import { LoginModalWrapper } from './Login.styles';
import { LoginModalProps } from './Login.types';

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, handleCancel }) => {
    return (
        <LoginModalWrapper open={isOpen} onCancel={handleCancel} footer={null} centered>
            <ModalTitle title="Sign in" />
            <ModalFooter submit={() => {}} action="Continue" cancel={handleCancel} />
        </LoginModalWrapper>
    );
};

export default LoginModal;
