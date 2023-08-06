import React from 'react';
import { ModalButtonContainer, ModalFooterDivider } from './ModalFooter.styles';
import { PrimaryButton, SecondaryButton } from '../../../styles/common.styles';
import { ModalFooterProps } from './ModalFooter.types';

const ModalFooter: React.FC<ModalFooterProps> = ({
    submit,
    cancel,
    action,
    primaryProps,
    cancelProps,
    cancelText,
    cancelButtonWidth = 100,
    actionButtonWidth = 100,
}) => {
    return (
        <>
            <ModalFooterDivider />
            <ModalButtonContainer>
                <SecondaryButton
                    onClick={cancel}
                    width={cancelButtonWidth}
                    height={32}
                    {...cancelProps}
                >
                    {cancelText || 'Cancel'}
                </SecondaryButton>
                {actionButtonWidth > 0 && (
                    <PrimaryButton
                        htmlType="submit"
                        onClick={submit}
                        {...primaryProps}
                        width={actionButtonWidth}
                        height={32}
                    >
                        {action}
                    </PrimaryButton>
                )}
            </ModalButtonContainer>
        </>
    );
};

export default ModalFooter;
