import { mount } from 'enzyme';
import React from 'react';
import { Article } from '../../models/article/types';
import { wrapWithProvider } from '../../utils/enzyme';
import EmptyArticlesPage from './emptyArticlesPage/EmptyArticlesPage';
import HomePage from './HomePage';
import { ArticlesSection } from './HomePage.styles';
import { HomePageState } from './HomePage.types';

describe('<HomePage />', () => {
    const component = mount(wrapWithProvider(<HomePage />));

    it('should render without error', () => {
        expect(component.html()).toBeTruthy();
    });

    it('should show <EmptyArticlesPage /> component with empty data', () => {
        const initialState = 'Initial State with false pending';

        React.useState = jest.fn().mockReturnValueOnce([
            initialState,
            {
                page: 1,
                perPage: 10,
                searchString: '',
                sortField: '',
                sortDirection: '',
                total: 0,
                data: Array<Article>(),
                pending: false,
            },
        ]);
        expect(component.find(EmptyArticlesPage).html()).not.toBeNull();
    });
});
