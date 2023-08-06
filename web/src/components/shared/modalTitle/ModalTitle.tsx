import React from 'react';
import { Image } from 'antd';

import { ModalTitleSpace, ModalTitleTypography } from './ModalTitle.styles';
import { ModalTitleProps } from './Modal.types';

const ModalTitle: React.FC<ModalTitleProps> = ({ title, icon }) => {
    return (
        <ModalTitleSpace>
            {icon && <Image src={`src/assets/images/${icon}`} preview={false} />}
            <ModalTitleTypography>
                <strong>{title}</strong>
            </ModalTitleTypography>
        </ModalTitleSpace>
    );
};

export default ModalTitle;
