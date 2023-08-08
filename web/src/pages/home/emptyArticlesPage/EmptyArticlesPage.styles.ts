import styled from 'styled-components';

export const EmptyArticlesPageWrapper = styled('div')`
    min-height: 400px;
    .empty-data {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .empty-data {
        max-width: 520px;
        width: 100%;
        line-height: 1.4;
        text-align: center;
    }

    .empty-data h2 {
        font-family: 'Cabin', sans-serif;
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        color: #000;
        margin-top: 0px;
        margin-bottom: 25px;
    }
`;
