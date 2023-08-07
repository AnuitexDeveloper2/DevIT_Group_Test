import { PayloadAction } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import CustomPagination from '../../components/shared/pagination/CustomPagination';
import { Article } from '../../models/article/types';
import { getPublicArticlesAction } from '../../redux/actions/articleActions';
import { GetArticlesResponse } from '../../redux/actions/articleActions/types';
import { useAppDispatch } from '../../redux/store';
import ArticleItem from './articleItem/ArticleItem';
import { ArticlesSection, HomePageWrapper, HomePaginationContainer } from './HomePage.styles';
import { HomePageState } from './HomePage.types';
import SearchSection from './searchSection/SearchSection';

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();

    const [state, setState] = useState<HomePageState>({
        page: 1,
        perPage: 10,
        searchString: '',
        sortField: '',
        sortDirection: '',
        total: 0,
        data: Array<Article>(),
    });

    useEffect(() => {
        getData(
            state.page,
            state.perPage,
            state.searchString,
            state.sortField,
            state.sortDirection,
        );
    }, []);

    const getData = async (
        page: number,
        perPage: number,
        searchString: string,
        sortField: string,
        sortDirection: string,
    ) => {
        const { payload } = (await dispatch(
            getPublicArticlesAction({ page, perPage, searchString, sortDirection, sortField }),
        )) as PayloadAction<GetArticlesResponse>;
        if (payload) {
            setState({
                ...state,
                page: page,
                perPage: perPage,
                data: payload.data,
                total: payload.total,
            });
        }
    };

    const changePageNumber = (pageNumber: number) => {
        getData(
            pageNumber,
            state.perPage,
            state.searchString,
            state.sortField,
            state.sortDirection,
        );
    };

    const search = (searchString: string) => {
        getData(state.page, state.perPage, searchString, state.sortField, state.sortDirection);
    };

    return (
        <HomePageWrapper>
            <HomePaginationContainer>
                <SearchSection search={search} />
            </HomePaginationContainer>
            <ArticlesSection>
                {state.data.map((item) => (
                    <ArticleItem key={item.id} item={item} />
                ))}
            </ArticlesSection>
            <HomePaginationContainer>
                <CustomPagination
                    page={state.page}
                    total={state.total}
                    changePageNumber={changePageNumber}
                    pageSize={state.perPage}
                />
            </HomePaginationContainer>
        </HomePageWrapper>
    );
};

export default HomePage;
