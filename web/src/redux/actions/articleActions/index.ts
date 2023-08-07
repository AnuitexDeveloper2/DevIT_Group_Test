import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../../helper/request';
import { Article } from '../../../models/article/types';
import { CreateArticleRequest, CreateArticleResponse, EditArticle } from './types';

const baseUrl = `/article`;

export const createArticleAction = createAsyncThunk<
    CreateArticleResponse | undefined,
    CreateArticleRequest
>('article/create', async (data: CreateArticleRequest) => {
    const result = await http<CreateArticleResponse, CreateArticleRequest>({
        path: `${baseUrl} `,
        method: 'post',
        body: data,
        accessToken: data.token,
    });
    return result;
});

export const getArticlesAction = createAsyncThunk<Array<Article> | undefined, any>(
    'article/get',
    async (data: any) => {
        const result = (await http)<Array<Article>, any>({
            path: `${baseUrl}`,
            method: 'post',
            body: data,
            accessToken: data.token,
        });
        return result;
    },
);

export const editArticleAction = createAsyncThunk<EditArticle | undefined, EditArticle>(
    'article/edit',
    async (data: EditArticle) => {
        const result = await http<EditArticle, EditArticle>({
            path: `${baseUrl} `,
            method: 'put',
            body: data,
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
        });
        return result;
    },
);
