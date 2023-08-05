import { Button } from 'antd';
import styled from 'styled-components';
import { blue, blue01, blue02 } from './colors';

export const PrimaryButton = styled(Button)`
    cursor: pointer;
    border-radius: 3px;
    background-color: ${blue01};
    color: #ffffff;
    border: none;
    font-family: 'DINNextLTPro';
    padding: 7px 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: ${blue02};
        color: #ffff;
    }
    &:focus {
        background-color: ${blue01};
        color: #ffffff;
    }
    &:disabled {
        opacity: 0.3;
        background-color: ${blue01};
        color: #ffffff;
        &:hover {
            background-color: ${blue01};
            color: #ffffff;
        }
    }
    &:active {
        background-color: ${blue};
    }
`;
