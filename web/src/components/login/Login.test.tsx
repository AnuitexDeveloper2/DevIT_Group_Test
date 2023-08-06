import { mount } from 'enzyme';
import { wrapWithProvider } from '../../utils/enzyme';
import LoginModal from './Login';
import { LoginModalProps } from './Login.types';

describe('<LoginModal />', () => {
    const defaultProps: LoginModalProps = {
        isOpen: false,
        handleCancel: jest.fn(),
    };

    const mountComponent = (props = defaultProps) =>
        mount(wrapWithProvider(<LoginModal {...props} />));

    const component = mountComponent();
    afterAll(() => {
        component.unmount();
    });

    it('should be closed initialy', () => {
        expect(component.html()).not.toBeTruthy();
    });
});
