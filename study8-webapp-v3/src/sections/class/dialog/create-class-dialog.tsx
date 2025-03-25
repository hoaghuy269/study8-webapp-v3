import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

interface CreateClassDialogProps {
  open: boolean;
  handleClose: () => void;
}

export const CreateClassDialog: React.FC<CreateClassDialogProps> = ({ open, handleClose }) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{t('text.createNewClass')}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t('text.startClass')}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label={t('text.className')}
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          name="description"
          label={t('text.description')}
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('button.cancel')}</Button>
        <Button type="submit">{t('button.submit')}</Button>
      </DialogActions>
    </Dialog>
  );
};
