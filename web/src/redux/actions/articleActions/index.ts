import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../../helper/request';
import { Article } from '../../../models/article/types';
import {
    CreateArticleRequest,
    CreateArticleResponse,
    EditArticle,
    GetArticlesAction,
} from './types';

const baseUrl = `/article`;

export const createArticleAction = createAsyncThunk<
    CreateArticleResponse | undefined,
    CreateArticleRequest
>('article/create', async (data: CreateArticleRequest) => {
    const result = await http<CreateArticleResponse, CreateArticleRequest>({
        path: `${baseUrl} `,
        method: 'post',
        body: data,
        accessToken: true,
    });
    return result;
});

export const getArticlesAction = createAsyncThunk<Array<Article> | undefined, GetArticlesAction>(
    'article/get',
    async (data: GetArticlesAction) => {
        const result = (await http)<Array<Article>, GetArticlesAction>({
            path: `${baseUrl}/get`,
            method: 'post',
            body: data,
            accessToken: true,
        });
        return result;
    },
);

export const editArticleAction = createAsyncThunk<EditArticle | undefined, EditArticle>(
    'article/edit',
    async (data: EditArticle) => {
        const result = await http<EditArticle, EditArticle>({
            path: `${baseUrl}/${data.id}`,
            method: 'put',
            body: data,
            accessToken: true,
        });
        return result;
    },
);

export const deleteArticleAction = createAsyncThunk<EditArticle | undefined, number>(
    'article/delete',
    async (id: number) => {
        const result = await http<EditArticle, undefined>({
            path: `${baseUrl}/${id}`,
            method: 'delete',
            accessToken: true,
        });
        return result;
    },
);
