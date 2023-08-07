import { Article } from '../../models/article/types';

export interface HomePageState {
    page: number;
    perPage: number;
    searchString: string;
    sortField: string;
    sortDirection: string;
    total: number;
    data: Array<Article>;
}
