import React from 'react';
import { PrimaryButton } from '../../styles/common.styles';
import { ContentPageWrapper, CreateNewArticleSection } from './Content.styles';

const ContentPage: React.FC = () => {
    return (
        <ContentPageWrapper>
            <CreateNewArticleSection>
                <div>total: </div>
                <div>
                    <PrimaryButton>Create article</PrimaryButton>
                </div>
            </CreateNewArticleSection>
        </ContentPageWrapper>
    );
};

export default ContentPage;
