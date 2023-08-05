import React from 'react';
import { Button, Dropdown, MenuProps } from 'antd';
import { HeaderTitle, HeaderUserIcon, HeaderWrapper } from './Header.styles';
import User from '../../assets/images/icons/user.svg';

const Header: React.FC = () => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Log in',
        },
    ];
    return (
        <HeaderWrapper>
            <div />
            <HeaderTitle>This is Header</HeaderTitle>
            <Dropdown menu={{ items }} placement="bottomLeft">
                <HeaderUserIcon src={User} alt="menu" width={40} />
            </Dropdown>
        </HeaderWrapper>
    );
};

export default Header;
