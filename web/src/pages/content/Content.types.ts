import { Article } from '../../models/article/types';

export interface ContentState {
    data: Array<Article>;
    page: number;
    perPage: number;
    total: number;
}
