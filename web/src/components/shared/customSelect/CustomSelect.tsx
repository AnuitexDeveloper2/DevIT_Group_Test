import { Select } from 'antd';
import React from 'react';
import { SelectData } from '../../../models/common/types';
import { CustomSelectFormItem } from './CustomSelect.styles';

const { Option } = Select;

interface Props {
    options: Array<SelectData>;
    name?: string;
    label?: string | React.ReactNode;
    placeholder?: string;
    rules?: any;
    props?: any;
    block?: boolean;
    value?: any;
}
const CustomSelect: React.FC<Props> = ({
    label,
    name,
    options,
    placeholder,
    rules,
    props,
    block,
    value,
}) => {
    const availableOptions = options.map((option) => (
        <Option value={option.id} key={option.id}>
            {option.name}
        </Option>
    ));
    return (
        <div>
            <CustomSelectFormItem
                name={name}
                label={label}
                rules={rules}
                display={block ? 'block' : 'flex'}
            >
                <Select aria-required placeholder={placeholder} value={value} {...props}>
                    {availableOptions}
                </Select>
            </CustomSelectFormItem>
        </div>
    );
};

export default CustomSelect;
