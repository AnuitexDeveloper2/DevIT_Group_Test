import { mount } from 'enzyme';
import { Dropdown } from 'antd';
import Header from './Header';
import { wrapWithProvider } from '../../utils/enzyme';

describe('<Header/>', () => {
    const component = mount(wrapWithProvider(<Header />));

    it('should render without error', () => {
        expect(component.html()).toBeTruthy();
    });

    it('should be only one option for unathorized user', () => {
        const menuInstance = component.find(Dropdown);
        const menuOptions = menuInstance.props().menu?.items;
        expect(menuOptions).toHaveLength(1);
    });
});
