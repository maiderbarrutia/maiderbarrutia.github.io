import React from 'react';
import styles from './FormStatusMessage.module.scss';

interface StatusMessageProps {
    success: boolean;
    message: string;
    isPopup?: boolean;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ success, message, isPopup = false }) => {
    if (!message) return null;

    const messageClass = success
        ? `${styles['status-message']} ${styles['status-message--success']}`
        : `${styles['status-message']} ${styles['status-message--error']}`;

    return (
        <>
            {isPopup ? (
                <>
                    <div className={styles['status-message__overlay']}></div>
                    <div className={`${messageClass} ${styles['status-message__popup']}`}>
                        <p>{message}</p>
                    </div>
                </>
            ) : (
                <div className={messageClass}>
                    <p>{message}</p>
                </div>
            )}
        </>
    );
};

export default StatusMessage;
