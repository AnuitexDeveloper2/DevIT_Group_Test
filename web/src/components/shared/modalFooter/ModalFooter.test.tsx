import { Button } from 'antd';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { PrimaryButton, SecondaryButton } from '../../../styles/common.styles';
import ModalFooter from './ModalFooter';
import { ModalFooterProps } from './ModalFooter.types';

describe('<ModalFooter />', () => {
    const defaultProps: ModalFooterProps = {
        submit: jest.fn(),
        cancel: jest.fn(),
        action: 'submit',
    };

    const mountComponent = (props = defaultProps) => mount(<ModalFooter {...props} />);

    const component = mountComponent();

    it('should render without error', () => {
        expect(component.html()).not.toBeNull();
    });

    it('should set submit button name from props', () => {
        act(() => {
            component.setProps({
                action: 'test',
            });
        });

        expect(component.find(PrimaryButton).text()).toEqual('test');
    });

    it('should call cancel function after click cancel button', async () => {
        const cancelButton = component.findWhere(
            (node) => node.type() === 'button' && node.text() === 'Cancel',
        );
        act(() => {
            cancelButton.simulate('click');
        });
        component.update();
        expect(defaultProps.cancel).toHaveBeenCalled();
    });
});
