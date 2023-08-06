import { Input, Form } from 'antd';
import { mount } from 'enzyme';
import CustomInput from './CustomInput';
import { CustomInputProps } from './CustomInput.types';

describe('<CustomInput />', () => {
    const defaultProps: CustomInputProps = {
        Component: Input,
        label: 'Email',
        name: 'email',
    };

    const mountComponent = (props = defaultProps) =>
        mount(
            <Form>
                <CustomInput {...props} />
            </Form>,
        );
    const component = mountComponent();

    afterAll(() => {
        component.unmount();
    });

    it('should render without error', () => {
        expect(component.html()).not.toBeNull();
    });
});
