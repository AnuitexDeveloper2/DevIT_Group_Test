import React from 'react';
import { Dropdown } from 'antd';
import {
    GrretSection,
    HeaderActionSection,
    HeaderTitle,
    HeaderUserIcon,
    HeaderWrapper,
} from './Header.styles';
import User from '../../assets/images/icons/user.svg';
import { HEADER_TITLE } from './Header.consts';
import { HeaderDropdownKeys } from './Header.types';
import { useModalState } from '../../hooks/modalState';
import LoginModal from '../login/Login';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getHeaderItems } from './Header.helper';
import { logOutAction } from '../../redux/reducers/authReducer/authSlice';

const Header: React.FC = () => {
    const authSelector = useAppSelector((state) => state.authReducer);
    const dispatch = useAppDispatch();
    const loginModal = useModalState();

    const handleDropdownItemClick = async (data: { key: string }) => {
        switch (data.key) {
            case HeaderDropdownKeys.LOGIN.toString():
                loginModal.onOpen();
                break;
            case HeaderDropdownKeys.LOGOUT.toString():
                dispatch(logOutAction());
                break;
            default:
                break;
        }
    };
    return (
        <HeaderWrapper>
            <div />
            <HeaderTitle>
                <a href="/">{HEADER_TITLE}</a>
            </HeaderTitle>
            <HeaderActionSection>
                {authSelector.user?.firstName && authSelector.user.lastName && (
                    <GrretSection>{`Hello, ${authSelector.user?.firstName} ${authSelector.user?.lastName}`}</GrretSection>
                )}
                <Dropdown
                    menu={{
                        items: getHeaderItems(authSelector.user),
                        onClick: handleDropdownItemClick,
                    }}
                    placement="bottomLeft"
                >
                    <HeaderUserIcon src={User} alt="menu" width={40} />
                </Dropdown>
            </HeaderActionSection>
            <LoginModal isOpen={loginModal.isOpen} handleCancel={loginModal.onClose} />
        </HeaderWrapper>
    );
};

export default Header;
