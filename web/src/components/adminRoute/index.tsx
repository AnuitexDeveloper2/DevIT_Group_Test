import React from 'react';
import { Navigate } from 'react-router-dom';
import { Role } from '../../models/user/enum';
import { useAppSelector } from '../../redux/store';

interface Props {
    children: any;
}

const AdminRoute: React.FC<Props> = ({ children }) => {
    const authReducer = useAppSelector((state) => state.authReducer);

    if (authReducer.user?.role === Role.ADMIN) {
        return <React.Fragment>{children}</React.Fragment>;
    } else {
        return <Navigate to={{ pathname: '/' }} />;
    }
};

export default AdminRoute;
