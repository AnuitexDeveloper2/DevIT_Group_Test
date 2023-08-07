import { Input, Select, Space } from 'antd';
import styled from 'styled-components';
import { blueDark01, blueDark03, grayDark03, grayLight02 } from '../../../styles/colors';
const { Option } = Select;

export const Container = styled(Space)`
    [type='number'] {
        -moz-appearance: textfield;
    }
`;

export const CurrentPageInput = styled(Input)`
    width: 40px;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: ${blueDark01};
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

export const CurrentNumberOfPage = styled('div')`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${grayDark03};
    white-space: nowrap;
`;

export const PageArrowContainer = styled('div')`
    color: ${grayLight02};
    :hover {
        cursor: pointer;
        color: ${blueDark03};
    }
    &.disabled {
        :hover {
            cursor: auto;
            color: ${grayLight02};
        }
    }
`;

export const ChangePageSizeOption = styled(Option)`
    background-color: red !important;
    .ant-select-selection-item {
        color: red;
    }
`;

export const PaginationSpace = styled(Space)`
    .ant-select-single .ant-select-selector .ant-select-selection-item,
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
        display: flex;
        align-items: center;
        font-weight: 400 !important;
        font-size: 13px !important;
        line-height: 16px !important;
        color: ${blueDark01};
    }
    .ant-select {
        font-weight: 400 !important;
        font-size: 13px !important;
        line-height: 16px !important;
        color: ${blueDark01};
        .ant-select-selector-item {
            font-weight: 400 !important;
            font-size: 13px !important;
            line-height: 16px !important;
            color: ${blueDark01};
        }
    }
`;
