import { createSlice } from '@reduxjs/toolkit';
import { setToken } from '../../../helper/localStorage';
import { User } from '../../../models/user/types';
import { signInAction } from '../../actions/authActions';

export interface AuthReducerType {
    user: User | null;
    pending: boolean;
    token: string;
}

const initialState: AuthReducerType = {
    user: null,
    pending: false,
    token: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logOutAction(state) {
            state.user = null;
            state.token = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signInAction.pending, (state) => {
            state.pending = true;
        });
        builder.addCase(signInAction.rejected, (state) => {
            state.pending = false;
        });
        builder.addCase(signInAction.fulfilled, (state, action) => {
            if (action.payload) {
                state.user = action.payload.user;
                state.token = action.payload.token;
                setToken(action.payload.token);
            }
            state.pending = false;
        });
    },
});

export const { logOutAction } = authSlice.actions;

export default authSlice.reducer;
