import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RootState } from '../redux/store';

const initialState: RootState = {
    authReducer: {
        user: null,
        pending: false,
        token: '',
    },
    articleReducer: {
        selectedArticle: null,
        pending: false,
    },
};

const middlewares: any = [thunk];
const mockStore = configureStore(middlewares);

export const wrapWithProvider = (componentToWrap: JSX.Element, state: Partial<RootState> = {}) => {
    const mockState = Object.keys(state).reduce(
        (acc, item) => ({ ...acc, [item]: state[item] }),
        initialState,
    );
    const store = mockStore(mockState);
    return (
        <Provider store={store}>
            <Router location={''} navigator={createMemoryHistory()}>
                {componentToWrap}
            </Router>
        </Provider>
    );
};
