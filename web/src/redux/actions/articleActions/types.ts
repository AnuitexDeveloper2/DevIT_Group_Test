import { Article } from '../../../models/article/types';

export interface ArticleRequest {
    title: string;
    description: string;
}

export interface CreateArticleRequest extends ArticleRequest {}

export interface CreateArticleResponse extends ArticleRequest {
    id: number;
}

export interface GetArticlesResponse {
    total: number;
    data: Array<Article>;
}

export interface GetArticlesAction {
    page: number;
    perPage: number;
}

export interface EditArticle extends ArticleRequest {
    id: number;
}

export interface GetPublicArticlesAction {
    page: number;
    perPage: number;
    searchString: string;
    sortField: string;
    sortDirection: string;
}
