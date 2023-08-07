import { PayloadAction } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useModalState } from '../../hooks/modalState';
import { Article } from '../../models/article/types';
import { getArticlesAction } from '../../redux/actions/articleActions';
import { GetArticlesResponse } from '../../redux/actions/articleActions/types';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { PrimaryButton } from '../../styles/common.styles';
import { ContentPageWrapper, CreateNewArticleSection } from './Content.styles';
import { ContentState } from './Content.types';
import ContentTable from './contentTable/ContentTable';
import CreateArticle from './createArticle/CreateArticle';

const ContentPage: React.FC = () => {
    const createContentModal = useModalState();
    const dispatch = useAppDispatch();
    const [state, setState] = useState<ContentState>({
        data: Array<Article>(),
        page: 1,
        perPage: 10,
        total: 0,
    });

    useEffect(() => {
        getData(state.page, state.perPage);
    }, []);

    const getData = async (page: number, perPage: number) => {
        const { payload } = (await dispatch(
            getArticlesAction({ page, perPage }),
        )) as PayloadAction<GetArticlesResponse>;
        if (payload) {
            setState({
                ...state,
                page: page,
                perPage: perPage,
                data: payload.data,
                total: payload.total,
            });
        }
    };

    const updateData = () => {
        getData(state.page, state.perPage);
        createContentModal.onClose();
    };
    return (
        <ContentPageWrapper>
            <CreateNewArticleSection>
                <div>total:{state.total} </div>
                <div>
                    <PrimaryButton onClick={createContentModal.onOpen}>
                        Create article
                    </PrimaryButton>
                </div>
            </CreateNewArticleSection>
            <ContentTable
                data={state.data}
                page={state.page}
                perPage={state.perPage}
                total={state.total}
                getData={getData}
            />
            {createContentModal.isOpen && (
                <CreateArticle
                    isOpen={createContentModal.isOpen}
                    handleCancel={createContentModal.onClose}
                    refresh={updateData}
                />
            )}
        </ContentPageWrapper>
    );
};

export default ContentPage;
