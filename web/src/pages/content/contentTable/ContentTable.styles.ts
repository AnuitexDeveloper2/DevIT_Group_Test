import styled from 'styled-components';
import { Table } from 'antd';
import { blueDark02, grayDark05, grayLight03, teal } from '../../../styles/colors';

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

    table {
        tbody {
            tr:nth-child(odd) {
                background-color: ${grayLight03} !important;
            }
            .ant-table-row:hover {
                background-color: ${teal} !important;
            }
            .ant-table-cell-row-hover {
                background-color: ${teal} !important;
            }
        }
    }
    .ant-pagination {
        display: none;
    }
`;

export const PagiNationContainer = styled('div')`
    display: flex;
    justify-content: flex-end;
    margin: 20px;
`;

export const DotsAction = styled('div')`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${grayDark05};
    box-shadow:
        0px 8px 0px ${grayDark05},
        0px 16px 0px ${grayDark05};
    position: absolute;
    top: 13px;
`;

export const OpenMenuButton = styled('button')`
    border: none;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    padding: 20px;
`;
