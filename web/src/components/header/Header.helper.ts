import { Role } from '../../models/user/enum';
import { User } from '../../models/user/types';
import { HeaderDropdownKeys } from './Header.types';

export const getHeaderItems = (user: User | null) => {
    switch (user?.role) {
        case Role.ADMIN:
            return [
                { key: HeaderDropdownKeys.LOGOUT, label: 'Log out' },
                { key: HeaderDropdownKeys.CONTENT, label: 'Content' },
            ];
        case Role.USER:
            return [{ key: HeaderDropdownKeys.LOGOUT, label: 'Log out' }];
        default:
            return [
                {
                    key: HeaderDropdownKeys.LOGIN,
                    label: 'Log in',
                },
                {
                    key: HeaderDropdownKeys.SIGNUP,
                    label: 'Sign up',
                },
            ];
    }
};
