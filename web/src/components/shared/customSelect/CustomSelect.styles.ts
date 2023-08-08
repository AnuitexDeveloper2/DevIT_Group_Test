import styled from 'styled-components';
import { Form } from 'antd';
import { error, grayDark03 } from '../../../styles/colors';
import { InputFormItemProps } from '../customInput/CustomInput.types';

export const CustomSelectFormItem = styled(Form.Item)<InputFormItemProps>`
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
    .ant-select-status-error.ant-select:not(.ant-select-disabled):not(
            .ant-select-customize-input
        ):not(.ant-pagination-size-changer)
        .ant-select-selector {
        border-color: ${error} !important;
    }
    .ant-form-item-explain-error {
        color: ${error} !important;
    }
`;
