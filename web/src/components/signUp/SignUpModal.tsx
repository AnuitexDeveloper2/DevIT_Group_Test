import { PayloadAction } from '@reduxjs/toolkit';
import { Modal, Input, Form } from 'antd';
import React from 'react';
import { SelectData } from '../../models/common/types';
import { Role } from '../../models/user/enum';
import { signUpAction } from '../../redux/actions/authActions';
import { SignUpResponse } from '../../redux/actions/authActions/types';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Spinner } from '../../styles/common.styles';
import CustomInput from '../shared/customInput/CustomInput';
import CustomSelect from '../shared/customSelect/CustomSelect';
import ModalFooter from '../shared/modalFooter/ModalFooter';
import ModalTitle from '../shared/modalTitle/ModalTitle';
import { CreateAccountRow, RoleSelecorWrapper } from './SignUpModal.styles';
import { SignUpModalProps } from './SignUpModal.types';

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, handleCancel }) => {
    const dispatch = useAppDispatch();
    const authReducer = useAppSelector((state) => state.authReducer);

    const onSubmit = async (data: any) => {
        const { payload } = (await dispatch(signUpAction(data))) as PayloadAction<SignUpResponse>;
        if (payload) {
            handleCancel();
        }
    };

    const selectOptions: Array<SelectData> = [
        {
            id: Role.USER,
            name: 'User',
        },
        {
            id: Role.ADMIN,
            name: 'Admin',
        },
    ];

    return (
        <Modal open={isOpen} onCancel={handleCancel} footer={null} centered>
            <Spinner spinning={authReducer.pending}>
                <ModalTitle title="Sign up" />
                <Form name="signup" autoComplete="off" onFinish={onSubmit}>
                    <CreateAccountRow>
                        <CustomInput
                            Component={Input}
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: '' },
                                {
                                    pattern: /^\w+([.-]?[.+]\w+)*@\w+([.-]?\w+)*\.\w{2,10}$/,
                                    message: 'Invalid email',
                                },
                            ]}
                            block
                        />

                        <CustomInput
                            Component={Input.Password}
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: '' }]}
                            block
                        />
                    </CreateAccountRow>
                    <CreateAccountRow>
                        <CustomInput
                            Component={Input}
                            label="First name"
                            name="firstName"
                            rules={[{ required: true, message: '' }]}
                            block
                        />

                        <CustomInput
                            Component={Input.Password}
                            label="Last name"
                            name="lastName"
                            rules={[{ required: true, message: '' }]}
                            block
                        />
                    </CreateAccountRow>
                    <RoleSelecorWrapper>
                        <CustomSelect
                            label="Role"
                            name="role"
                            options={selectOptions}
                            placeholder="Select role"
                            block
                        />
                    </RoleSelecorWrapper>
                    <ModalFooter submit={() => {}} action="Continue" cancel={handleCancel} />
                </Form>
            </Spinner>
        </Modal>
    );
};

export default SignUpModal;
