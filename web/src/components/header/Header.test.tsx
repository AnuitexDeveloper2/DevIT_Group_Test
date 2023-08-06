import { mount } from 'enzyme';
import { Dropdown } from 'antd';
import Header from './Header';
import { wrapWithProvider } from '../../utils/enzyme';
import { Role } from '../../models/user/enum';

const admin = {
    email: 'test@gmial.com',
    firstName: 'admin',
    lastName: 'admin',
    role: Role.ADMIN,
};

describe('<Header/>', () => {
    const component = mount(wrapWithProvider(<Header />));
    const adminComponent = mount(
        wrapWithProvider(<Header />, {
            authReducer: { user: admin, token: 'test_token', pending: false },
        }),
    );
    it('should render without error', () => {
        expect(component.html()).toBeTruthy();
    });

    it('should be only one option for unathorized user', () => {
        const menuInstance = component.find(Dropdown);
        const menuOptions = menuInstance.props().menu?.items;
        expect(menuOptions).toHaveLength(1);
    });

    it('should be two options for user with admin role', () => {
        const menuInstance = adminComponent.find(Dropdown);
        const menuOptions = menuInstance.props().menu?.items;
        expect(menuOptions).toHaveLength(2);
    });
});
