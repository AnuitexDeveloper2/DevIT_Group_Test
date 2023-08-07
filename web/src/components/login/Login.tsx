import { PayloadAction } from '@reduxjs/toolkit';
import { Form, Input, Spin } from 'antd';
import React from 'react';
import { signInAction } from '../../redux/actions/authActions';
import { SignInRequest, SignInResponse } from '../../redux/actions/authActions/types';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { alertService } from '../../services';
import { Spinner } from '../../styles/common.styles';
import CustomInput from '../shared/customInput/CustomInput';
import ModalFooter from '../shared/modalFooter/ModalFooter';
import ModalTitle from '../shared/modalTitle/ModalTitle';
import { LoginModalWrapper } from './Login.styles';
import { LoginModalProps } from './Login.types';

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, handleCancel }) => {
    const dispatch = useAppDispatch();
    const authReducer = useAppSelector((state) => state.authReducer);
    const [form] = Form.useForm();

    const onSubmit = async (data: SignInRequest) => {
        const { payload } = (await dispatch(signInAction(data))) as PayloadAction<SignInResponse>;
        if (payload) {
            handleCancel();
        }
    };

    return (
        <LoginModalWrapper open={isOpen} onCancel={handleCancel} footer={null} centered>
            <Spinner spinning={authReducer.pending}>
                <ModalTitle title="Sign in" />
                <Form
                    name="login"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 12 }}
                    autoComplete="off"
                    onFinish={onSubmit}
                    form={form}
                >
                    <CustomInput
                        Component={Input}
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: '' }]}
                        block
                    />
                    <CustomInput
                        Component={Input.Password}
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: '' }]}
                        block
                    />
                    <ModalFooter submit={() => {}} action="Continue" cancel={handleCancel} />
                </Form>
            </Spinner>
        </LoginModalWrapper>
    );
};

export default LoginModal;
