import React from 'react';
import { Dropdown } from 'antd';
import { Article } from '../../../models/article/types';
import { OpenMenuButton, DotsAction } from './ContentTable.styles';
import { ArticleTableActionsProps, ContentTableAction } from './ContentTableTypes';

const ArticleTableActions: React.FC<ArticleTableActionsProps> = ({ handleActions, article }) => {
    const handleActionClick = (data: { key: string }) => {
        handleActions(data.key, article);
    };

    return (
        <Dropdown
            menu={{
                items: [
                    {
                        key: ContentTableAction.DELETE,
                        label: 'Delete',
                    },
                    {
                        key: ContentTableAction.EDIT,
                        label: 'Edit',
                    },
                ],
                onClick: handleActionClick,
            }}
            trigger={['click']}
            placement="bottomLeft"
        >
            <div>
                <OpenMenuButton>
                    <DotsAction></DotsAction>
                </OpenMenuButton>
            </div>
        </Dropdown>
    );
};

export const columns = (handleActions: (action: string, article: Article) => void) => [
    {
        title: 'Title',
        sorter: false,
        clickable: false,
        dataIndex: 'title',
    },
    {
        title: 'Description',
        sorter: false,
        clickable: false,
        dataIndex: 'description',
    },
    {
        sorter: false,
        render: (data: Article) => (
            <ArticleTableActions handleActions={handleActions} article={data} />
        ),
        width: 20,
    },
];
