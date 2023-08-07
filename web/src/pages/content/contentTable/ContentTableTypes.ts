import { ColumnType } from 'antd/lib/table';
import { Article } from '../../../models/article/types';

export interface ContentTableProps {
    data: Array<Article>;
    page: number;
    total: number;
    perPage: number;
}

export interface ArticleTableActionsProps {
    handleActions: (action: string, article: Article) => void;
    article: Article;
}

export enum ContentTableAction {
    EDIT,
    DELETE,
}
