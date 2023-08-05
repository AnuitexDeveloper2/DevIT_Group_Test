import { mount } from 'enzyme';
import Header from './Header';

describe('<Header/>', () => {
    const component = mount(<Header />);

    it('should render without error', () => {
        expect(component.html()).toBeTruthy();
    });
});
