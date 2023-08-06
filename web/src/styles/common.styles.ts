import { Button } from 'antd';
import styled from 'styled-components';
import { blue, blue01, blue02, blueDark01, blueDark02, blueDark03, white } from './colors';

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
        color: ${white} !important;
    }
    &:focus {
        background-color: ${blue01};
        color: #ffffff;
    }
    &:disabled {
        opacity: 0.3;
        background-color: ${blue01};
        color: ${white} !important;
        &:hover {
            background-color: ${blue01};
            color: ${white} !important;
        }
    }
    &:active {
        background-color: ${blue};
    }
`;

export const SecondaryButton = styled(Button)`
    border-radius: 3px;
    background-color: ${blueDark02};
    color: #ffffff;
    cursor: pointer;
    border: none;
    font-family: 'DINNextLTPro';
    padding: 7px 14px;
    line-height: 18px;
    align-items: center;
    display: flex;
    justify-content: center;
    &:hover {
        background-color: ${blueDark03};
        color: ${white} !important;
    }
    &:focus {
        background-color: ${blueDark01};
        color: ${white} !important;
    }
    &:active {
        background-color: ${blueDark01};
    }
`;
