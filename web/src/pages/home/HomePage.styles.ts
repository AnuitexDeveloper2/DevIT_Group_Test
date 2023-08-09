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
    position: relative;
`;

export const HomePaginationContainer = styled('div')`
    display: flex;
    justify-content: flex-end;
    margin: 30px 10px;
    padding-bottom: 30px;
`;

export const HomePageActionsContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    margin: 20px 30px;
`;
