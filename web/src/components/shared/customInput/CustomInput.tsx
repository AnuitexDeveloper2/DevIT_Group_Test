import React from 'react';
import { InputFormItem, InputWrapper } from './CustomInput.styles';
import { CustomInputProps } from './CustomInput.types';

const CustomInput: React.FC<CustomInputProps> = ({
    Component: Child,
    props,
    label,
    name,
    rules,
    block,
}) => {
    return (
        <InputWrapper>
            <InputFormItem
                name={name}
                label={label}
                rules={rules}
                display={block ? 'block' : 'flex'}
            >
                <Child {...props} />
            </InputFormItem>
        </InputWrapper>
    );
};

export default CustomInput;
