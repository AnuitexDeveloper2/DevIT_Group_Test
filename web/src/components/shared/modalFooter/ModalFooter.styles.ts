import { Divider, Space } from 'antd';
import styled from 'styled-components';
import { blue01, grayDark02, grayLight02, white } from '../../../styles/colors';

export const ModalFooterDivider = styled(Divider)`
    border-top: 1px solid ${grayLight02};
    margin-top: 5px;
    margin-bottom: 20px;
`;

export const ModalButtonContainer = styled(Space)`
    width: 100%;
    justify-content: flex-end;
    gap: 12px !important;
    &:focus {
        color: ${white};
    }
`;

export const CaptchaBlock = styled('div')`
    margin-top: 16px;
`;

export const CaptchaText = styled('p')`
    font-weight: 400;
    font-size: 11px;
    color: ${grayDark02};
    margin-bottom: 0px;
`;

export const Link = styled('a')`
    color: ${blue01};
    margin-bottom: 0px;
`;

export const OuterContainer = styled('div')`
    display: flex;
    justify-content: space-between;
`;
