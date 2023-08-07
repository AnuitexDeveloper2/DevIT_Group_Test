import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CurrentNumberOfPage, PageArrowContainer, Container } from './CustomPagination.styles';
import { CustomPaginationProps } from './CustomPagination.types';

const CustomPagination: React.FC<CustomPaginationProps> = ({
    page,
    total,
    changePageNumber,
    pageSize,
}) => {
    const nexPage = () => {
        if (page < total / pageSize) {
            changePageNumber(page + 1);
        }
    };

    const previousPage = () => {
        if (page > 1) {
            changePageNumber(page - 1);
        }
    };

    return (
        <Container aria-orientation="horizontal">
            <PageArrowContainer className={`${page > 1 ? '' : 'disabled'}`} onClick={previousPage}>
                <LeftOutlined />
            </PageArrowContainer>
            <CurrentNumberOfPage>{`${page} of ${Math.ceil(
                total / pageSize,
            )} pages`}</CurrentNumberOfPage>
            <PageArrowContainer
                className={`${page < total / pageSize ? '' : 'disabled'}`}
                onClick={nexPage}
            >
                <RightOutlined />
            </PageArrowContainer>
        </Container>
    );
};

export default CustomPagination;
