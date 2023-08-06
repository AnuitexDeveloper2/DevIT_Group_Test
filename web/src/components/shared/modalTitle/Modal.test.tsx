import { mount } from 'enzyme';
import { ModalTitleProps } from './Modal.types';
import ModalTitle from './ModalTitle';
import { ModalTitleTypography } from './ModalTitle.styles';

describe('<ModalTitle />', () => {
    const defaultProps: ModalTitleProps = {
        title: 'Test',
    };

    const mountComponent = (props = defaultProps) => mount(<ModalTitle {...props} />);

    const component = mountComponent();

    it('should render without error', () => {
        expect(component.html()).not.toBeNull();
    });

    it('shoul render proper title', () => {
        const title = component.find(ModalTitleTypography);
        expect(title.text()).toEqual('Test');
    });
});
