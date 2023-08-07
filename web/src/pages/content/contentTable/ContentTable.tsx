import React from 'react';
import CustomPagination from '../../../components/shared/pagination/CustomPagination';
import { Article } from '../../../models/article/types';
import { CustomContentTable, PagiNationContainer } from './ContentTable.styles';
import { columns } from './ContentTableColumns';
import { ContentTableAction, ContentTableProps } from './ContentTableTypes';

const ContentTable: React.FC<ContentTableProps> = ({ data, page, perPage, total }) => {
    const changePageNumber = (pageNumber: number) => {
        console.log(pageNumber);
    };

    const handleActions = (action: string, article: Article) => {
        console.log(action);
        console.log(article);
    };

    return (
        <div>
            {' '}
            <CustomContentTable
                dataSource={data}
                columns={columns(handleActions)}
                rowKey={(record) => record.id}
            />
            <PagiNationContainer>
                <CustomPagination
                    page={page}
                    pageSize={perPage}
                    total={total}
                    changePageNumber={changePageNumber}
                />
            </PagiNationContainer>
        </div>
    );
};

export default ContentTable;
