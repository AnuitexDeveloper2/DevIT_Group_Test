import { createSlice } from '@reduxjs/toolkit';
import { Article } from '../../../models/article/types';
import { createArticleAction } from '../../actions/articleActions';

export interface ArticleReducerType {
    selectedArticle: Article | null;
    pending: boolean;
}

const initialState: ArticleReducerType = {
    selectedArticle: null,
    pending: false,
};

export const articleSlice = createSlice({
    name: 'article',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createArticleAction.pending, (state) => {
            state.pending = true;
        });
        builder.addCase(createArticleAction.rejected, (state) => {
            state.pending = false;
        });
        builder.addCase(createArticleAction.fulfilled, (state) => {
            state.pending = false;
        });
    },
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;
