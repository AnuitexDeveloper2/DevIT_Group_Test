import { mount } from 'enzyme';
import { Dropdown } from 'antd';
import Header from './Header';

describe('<Header/>', () => {
    const component = mount(<Header />);

    it('should render without error', () => {
        expect(component.html()).toBeTruthy();
    });

    it('should be only one option for unathorized user', () => {
        const menuInstance = component.find(Dropdown);
        const menuOptions = menuInstance.props().menu?.items;
        expect(menuOptions).toHaveLength(1);
    });
});
