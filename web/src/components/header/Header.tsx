import React from 'react';
import { Dropdown, MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';
import { HeaderTitle, HeaderUserIcon, HeaderWrapper } from './Header.styles';
import User from '../../assets/images/icons/user.svg';
import { HEADER_TITLE } from './Header.consts';
import { HeaderDropdownKeys } from './Header.types';
import { useModalState } from '../../hooks/modalState';
import LoginModal from '../login/Login';

const Header: React.FC = () => {
    const loginModal = useModalState();
    const items: MenuProps['items'] = [
        {
            key: HeaderDropdownKeys.LOGIN,
            label: 'Log in',
        },
    ];

    const handleDropdownItemClick = (/*eventData: { key: string }*/) => {
        loginModal.onOpen();
    };
    return (
        <HeaderWrapper>
            <div />
            <HeaderTitle>
                <a href="/">{HEADER_TITLE}</a>
            </HeaderTitle>
            <Dropdown menu={{ items, onClick: handleDropdownItemClick }} placement="bottomLeft">
                <HeaderUserIcon src={User} alt="menu" width={40} />
            </Dropdown>
            <LoginModal isOpen={loginModal.isOpen} handleCancel={loginModal.onClose} />
        </HeaderWrapper>
    );
};

export default Header;
