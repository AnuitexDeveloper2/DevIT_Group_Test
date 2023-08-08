import { Select } from 'antd';
import React from 'react';
import { SelectData, SortDirection } from '../../../models/common/types';
import { SortSectionWrapper } from './SortSection.styles';
import { SortSectionProps } from './SortSection.types';

const { Option } = Select;

const SortSection: React.FC<SortSectionProps> = ({ sort }) => {
    const options: Array<SelectData> = [
        { id: SortDirection.NONE, name: 'None' },
        {
            id: SortDirection.ASC,
            name: 'A-Z',
        },
        {
            id: SortDirection.DESC,
            name: 'Z-A',
        },
    ];

    const availableOptions = options.map((option) => (
        <Option value={option.id} key={option.id}>
            {option.name}
        </Option>
    ));
    return (
        <SortSectionWrapper>
            <Select aria-required placeholder="Select sort direction" onChange={sort}>
                {availableOptions}
            </Select>
        </SortSectionWrapper>
    );
};

export default SortSection;
