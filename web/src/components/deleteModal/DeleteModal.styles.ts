import styled from 'styled-components';
import { Modal } from 'antd';
import { blueDark01 } from '../../styles/colors';

export const DeleteProjectModal = styled(Modal)`
    width: 680px !important;
    height: 244px !important;

    .ant-modal-body {
        padding: 32px 40px 40px 40px;
    }

    .ant-modal-content {
        border-radius: 6px;
    }

    .ant-divider-horizontal {
        margin-top: 28px;
        margin-bottom: 21px;
    }
`;

export const DeleteModalText = styled('div')`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${blueDark01};
`;
