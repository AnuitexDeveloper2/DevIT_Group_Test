import { Row } from 'antd';
import styled from 'styled-components';
import { blueDark01 } from '../../styles/colors';
import CustomSelect from '../shared/customSelect/CustomSelect';

export const CreateAccountRow = styled(Row)`
    .ant-form-item-label
        > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
        margin: 0;
    }
    width: 100%;
    gap: 40px;

    label {
        font-weight: 700 !important;
        font-size: 13px !important;
        line-height: 16px !important;
        color: ${blueDark01} !important;
        white-space: nowrap;
    }
`;

export const RoleSelecorWrapper = styled('div')`
    width: 40%;
`;
