import { Form, Input } from 'antd';
import React from 'react';
import CustomInput from '../shared/customInput/CustomInput';
import ModalFooter from '../shared/modalFooter/ModalFooter';
import ModalTitle from '../shared/modalTitle/ModalTitle';
import { LoginModalWrapper } from './Login.styles';
import { LoginModalProps } from './Login.types';

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, handleCancel }) => {
    const [form] = Form.useForm();

    const onSubmit = () => {};

    return (
        <LoginModalWrapper open={isOpen} onCancel={handleCancel} footer={null} centered>
            <ModalTitle title="Sign in" />
            <Form
                name="login"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
                autoComplete="off"
                onFinish={onSubmit}
                form={form}
            >
                <CustomInput Component={Input} label="Email" name="email" block />
                <CustomInput Component={Input} label="Password" name="password" block />
            </Form>
            <ModalFooter submit={() => {}} action="Continue" cancel={handleCancel} />
        </LoginModalWrapper>
    );
};

export default LoginModal;
