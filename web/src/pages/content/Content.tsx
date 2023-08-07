import React from 'react';
import { useModalState } from '../../hooks/modalState';
import { PrimaryButton } from '../../styles/common.styles';
import { ContentPageWrapper, CreateNewArticleSection } from './Content.styles';
import CreateArticle from './createArticle/CreateArticle';

const ContentPage: React.FC = () => {
    const createContentModal = useModalState();
    return (
        <ContentPageWrapper>
            <CreateNewArticleSection>
                <div>total: </div>
                <div>
                    <PrimaryButton onClick={createContentModal.onOpen}>
                        Create article
                    </PrimaryButton>
                </div>
            </CreateNewArticleSection>
            {createContentModal.isOpen && (
                <CreateArticle
                    isOpen={createContentModal.isOpen}
                    handleCancel={createContentModal.onClose}
                />
            )}
        </ContentPageWrapper>
    );
};

export default ContentPage;
