import React from 'react';
import { EmptyArticlesPageWrapper } from './EmptyArticlesPage.styles';

const EmptyArticlesPage: React.FC = () => {
    return (
        <EmptyArticlesPageWrapper>
            <div className="empty-data">
                <h2>There are no articles yet</h2>
            </div>
        </EmptyArticlesPageWrapper>
    );
};

export default EmptyArticlesPage;
