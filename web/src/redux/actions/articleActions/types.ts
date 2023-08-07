import { Article } from '../../../models/article/types';

export interface ArticleRequest {
    title: string;
    description: string;
}

export interface CreateArticleRequest extends ArticleRequest {
    token: string;
}

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
    token: string;
}

export interface EditArticle extends ArticleRequest {
    id: number;
}
