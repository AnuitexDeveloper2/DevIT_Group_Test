import { PayloadAction } from '@reduxjs/toolkit';
import React, { useCallback, useState } from 'react';
import DeleteModal from '../../../components/deleteModal/DeleteModal';
import CustomPagination from '../../../components/shared/pagination/CustomPagination';
import { useModalState } from '../../../hooks/modalState';
import { Article } from '../../../models/article/types';
import { deleteArticleAction } from '../../../redux/actions/articleActions';
import { useAppDispatch } from '../../../redux/store';
import CreateArticle from '../createArticle/CreateArticle';
import { CustomContentTable, PagiNationContainer } from './ContentTable.styles';
import { columns } from './ContentTableColumns';
import { ContentTableAction, ContentTableProps, ContentTableState } from './ContentTableTypes';

const ContentTable: React.FC<ContentTableProps> = ({ data, page, perPage, total, getData }) => {
    const dispatch = useAppDispatch();

    const editArticleModal = useModalState();
    const deleteArticleModal = useModalState();
    const [state, setState] = useState<ContentTableState>({
        selectedArticle: null,
    });
    const changePageNumber = (pageNumber: number) => {
        getData(pageNumber, perPage);
    };

    const handleActions = (action: string, article: Article) => {
        setState({ ...state, selectedArticle: article });
        switch (action.toString()) {
            case ContentTableAction.EDIT.toString():
                editArticleModal.onOpen();
                break;
            case ContentTableAction.DELETE.toString():
                deleteArticleModal.onOpen();
                break;
            default:
                break;
        }
    };

    const updateData = useCallback(() => {
        editArticleModal.onClose();
        deleteArticleModal.onClose();
        getData(page, perPage);
    }, []);

    const deleteArticle = async () => {
        if (state.selectedArticle?.id) {
            const { payload } = (await dispatch(
                deleteArticleAction(state.selectedArticle.id),
            )) as PayloadAction<any>;
            if (payload) {
                updateData();
            }
        }
    };

    return (
        <div>
            {' '}
            <CustomContentTable
                dataSource={data}
                columns={columns(handleActions)}
                rowKey={(record) => record.id}
            />
            <PagiNationContainer>
                <CustomPagination
                    page={page}
                    pageSize={perPage}
                    total={total}
                    changePageNumber={changePageNumber}
                />
            </PagiNationContainer>
            {editArticleModal.isOpen && (
                <CreateArticle
                    isOpen={editArticleModal.isOpen}
                    handleCancel={editArticleModal.onClose}
                    article={state.selectedArticle}
                    refresh={updateData}
                />
            )}
            {deleteArticleModal.isOpen && (
                <DeleteModal
                    isOpen={deleteArticleModal.isOpen}
                    text={state.selectedArticle?.title || ''}
                    title="Article"
                    closeModal={deleteArticleModal.onClose}
                    reload={deleteArticle}
                />
            )}
        </div>
    );
};

export default ContentTable;
