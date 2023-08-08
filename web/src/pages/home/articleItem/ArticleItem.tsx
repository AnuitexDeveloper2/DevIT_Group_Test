import React from 'react';
import { ArticleDescription, ArticleItemWrapper, ArticleTitle } from './ArticleItem.styles';
import { ArticleItemProps } from './ArticleItem.types';

const ArticleItem: React.FC<ArticleItemProps> = ({ item }) => {
    return (
        <ArticleItemWrapper href={item.link} target="_blank">
            <ArticleTitle>{item.title}</ArticleTitle>
            <ArticleDescription>{item.description}</ArticleDescription>
        </ArticleItemWrapper>
    );
};

export default ArticleItem;
