import styled from 'styled-components';

export const HomePageWrapper = styled('div')`
    max-width: 1200px;
    margin: 40px auto 0;
`;

export const ArticlesSection = styled('section')`
    display: grid;
    grid-template-columns: repeat(auto-fit, 364px);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    gap: 1.5rem;
`;

export const HomePaginationContainer = styled('div')`
    display: flex;
    justify-content: flex-end;
    margin: 20px 10px;
`;
