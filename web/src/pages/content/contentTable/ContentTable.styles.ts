import styled from 'styled-components';
import { Table } from 'antd';
import { blueDark02 } from '../../../styles/colors';

export const CustomContentTable = styled(Table)`
    [aria-label] {
        .ant-table-column-sorter-down {
            visibility: visible;
            color: ${blueDark02};
            font-weight: 900;
            font-size: 10px;
            position: relative;
            top: -3px;
        }
    }

    .ant-table-column-sorter-up.active,
    .ant-table-column-sorter-down.active {
        visibility: visible;
        position: relative;
        font-weight: 900;
        font-size: 10px;
    }

    .ant-table-column-sorter-up.active {
        top: 3px;
    }

    .ant-table-column-sorter-down.active {
        top: -3px;
    }

    .ant-table-column-sorter-up,
    .ant-table-column-sorter-down {
        visibility: collapse;
    }

    .ant-table-column-title {
        flex: none;
    }

    .ant-table-column-sorters {
        justify-content: normal;
    }

    @supports (-moz-appearance: button) and (contain: paint) {
        [aria-label] {
            .ant-table-column-sorter-down {
                top: 3px;
            }
        }
        .ant-table-column-sorter-down.active {
            top: 3px;
        }
        .ant-table-column-sorter-up.active {
            top: -3px;
        }
    }
`;
