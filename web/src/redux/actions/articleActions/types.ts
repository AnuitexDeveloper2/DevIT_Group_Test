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

export interface EditArticle extends ArticleRequest {
    id: number;
}
