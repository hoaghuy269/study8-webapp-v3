import { t } from 'i18next';

import { Alert, Snackbar, AlertTitle } from '@mui/material';

interface AlertProps {
    open: boolean;
    message: string | null;
    severity?: 'success' | 'info' | 'warning' | 'error';
    onClose: () => void;
}

export default function MessageAlert({ open, message, severity = 'error', onClose }: AlertProps) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert severity={severity} onClose={onClose}>
                <AlertTitle>{t(`text.${severity}`)}</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    );
}
