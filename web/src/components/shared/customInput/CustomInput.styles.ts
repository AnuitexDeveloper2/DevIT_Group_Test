import { Form } from 'antd';
import { styled } from 'styled-components';
import { grayDark03 } from '../../../styles/colors';
import { InputFormItemProps } from './CustomInput.types';

export const InputWrapper = styled('div')``;

export const InputFormItem = styled(Form.Item)<InputFormItemProps>`
    .ant-form-item-row {
        display: ${(props: InputFormItemProps) => props.display} !important;
    }
    label {
        font-weight: 600;
        color: ${grayDark03};
        white-space: normal;
        line-height: 1.1;
        text-align: right;
        &:after {
            content: none !important;
        }
    }
`;
