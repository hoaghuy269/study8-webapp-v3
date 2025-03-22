import { Snackbar, Alert, AlertTitle } from '@mui/material';
import { t } from 'i18next';

interface ErrorAlertProps {
    open: boolean;
    message: string | null;
    onClose: () => void;
}

export default function ErrorAlert({ open, message, onClose }: ErrorAlertProps) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert severity="error" onClose={onClose}>
                <AlertTitle>{t('text.error')}</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    );
}
