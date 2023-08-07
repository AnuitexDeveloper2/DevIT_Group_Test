import { Article } from '../../models/article/types';

export interface ContentTableState {
    data: Array<Article>;
    page: number;
    perPage: number;
    total: number;
}
