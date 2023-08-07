import { PayloadAction } from '@reduxjs/toolkit';
import { Input, Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect } from 'react';
import CustomInput from '../../../components/shared/customInput/CustomInput';
import ModalFooter from '../../../components/shared/modalFooter/ModalFooter';
import ModalTitle from '../../../components/shared/modalTitle/ModalTitle';
import { createArticleAction } from '../../../redux/actions/articleActions';
import {
    CreateArticleRequest,
    CreateArticleResponse,
} from '../../../redux/actions/articleActions/types';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { Spinner } from '../../../styles/common.styles';
import { CreateArticleModal } from './CreateArticle.styles';
import { CreateArticleProps } from './CreateArticle.types';

const CreateArticle: React.FC<CreateArticleProps> = ({ isOpen, handleCancel, article }) => {
    const articleReducer = useAppSelector((state) => state.articleReducer);
    const authReducer = useAppSelector((state) => state.authReducer.token);
    const dispatch = useAppDispatch();
    const [form] = useForm();

    const onSubmit = async (data: CreateArticleRequest) => {
        const { payload } = (await dispatch(
            createArticleAction({ ...data, token: authReducer }),
        )) as PayloadAction<CreateArticleResponse>;
        if (payload) {
            handleCancel();
        }
    };
    return (
        <CreateArticleModal open={isOpen} onCancel={handleCancel} footer={null} centered>
            <Spinner spinning={articleReducer.pending}>
                <ModalTitle title={`${article ? 'Edit' : 'Create new'} Article`} />
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
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: '' }]}
                        block
                    />
                    <CustomInput
                        Component={TextArea}
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: '' }]}
                        block
                    />
                    <ModalFooter submit={() => {}} action="Continue" cancel={handleCancel} />
                </Form>
            </Spinner>
        </CreateArticleModal>
    );
};

export default CreateArticle;
