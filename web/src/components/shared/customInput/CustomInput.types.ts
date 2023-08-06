import { Rule } from 'antd/es/form';

export interface CustomInputProps {
    Component: any;
    rules?: Rule[];
    props?: any;
    block?: boolean;
    label: string;
    name: string;
}

export interface InputFormItemProps {
    display: string;
}
