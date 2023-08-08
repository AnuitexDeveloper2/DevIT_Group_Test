import { PayloadAction } from '@reduxjs/toolkit';
import { Input, Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect } from 'react';
import CustomInput from '../../../components/shared/customInput/CustomInput';
import ModalFooter from '../../../components/shared/modalFooter/ModalFooter';
import ModalTitle from '../../../components/shared/modalTitle/ModalTitle';
import { createArticleAction, editArticleAction } from '../../../redux/actions/articleActions';
import {
    CreateArticleRequest,
    CreateArticleResponse,
    EditArticle,
} from '../../../redux/actions/articleActions/types';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { Spinner } from '../../../styles/common.styles';
import { CreateArticleModal } from './CreateArticle.styles';
import { CreateArticleProps } from './CreateArticle.types';

const CreateArticle: React.FC<CreateArticleProps> = ({
    isOpen,
    article,
    handleCancel,
    refresh,
}) => {
    const articleReducer = useAppSelector((state) => state.articleReducer);
    const dispatch = useAppDispatch();
    const [form] = useForm();

    useEffect(() => {
        if (article) {
            form.setFieldsValue(article);
        }
    }, []);

    const onSubmit = async (data: CreateArticleRequest) => {
        let result: any;
        if (article && article.id) {
            const { payload } = (await dispatch(
                editArticleAction({ ...data, id: article.id }),
            )) as PayloadAction<EditArticle>;
            result = payload;
        } else {
            const { payload } = (await dispatch(
                createArticleAction({ ...data }),
            )) as PayloadAction<CreateArticleResponse>;
            result = payload;
        }
        if (result) {
            refresh();
        }
    };
    return (
        <CreateArticleModal open={isOpen} onCancel={handleCancel} footer={null} centered>
            <Spinner spinning={false}>
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
                    <CustomInput
                        Component={Input}
                        label="link"
                        name="link"
                        rules={[
                            { required: true, message: '' },
                            {
                                pattern:
                                    /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?feed$/,
                                message: 'Invalid link',
                            },
                        ]}
                        block
                    />
                    <ModalFooter submit={() => {}} action="Continue" cancel={handleCancel} />
                </Form>
            </Spinner>
        </CreateArticleModal>
    );
};

export default CreateArticle;
