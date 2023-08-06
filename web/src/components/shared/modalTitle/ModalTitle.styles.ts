import styled from 'styled-components';
import { Space, Typography } from 'antd';
import { blueDark01 } from '../../../styles/colors';

export const ModalTitleSpace = styled(Space)`
    width: 100%;
    align-items: end;
    margin-bottom: 32px;
    gap: 12px !important;
    white-space: nowrap;
`;

export const ModalTitleTypography = styled(Typography)`
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: ${blueDark01};
    display: flex;
    align-items: baseline;
    margin: 0;
    font-family: 'DINNextLTPro';
`;
