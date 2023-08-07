import { ColumnType } from 'antd/lib/table';
import { Article } from '../../../models/article/types';

export interface ContentTableProps {
    data: Array<Article>;
    page: number;
    total: number;
    perPage: number;
    getData: (page: number, perPage: number) => void;
}

export interface ContentTableState {
    selectedArticle: Article | null;
}

export interface ArticleTableActionsProps {
    handleActions: (action: string, article: Article) => void;
    article: Article;
}

export enum ContentTableAction {
    EDIT,
    DELETE,
}
