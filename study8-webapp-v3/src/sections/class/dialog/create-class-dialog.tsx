import React from "react";

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

export const CreateClassDialog: React.FC<CreateClassDialogProps> = ({ open, handleClose }) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We will send updates
        occasionally.
      </DialogContentText>
      <TextField
        autoFocus
        required
        margin="dense"
        id="name"
        name="email"
        label="Email Address"
        type="email"
        fullWidth
        variant="standard"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button type="submit">Subscribe</Button>
    </DialogActions>
  </Dialog>
);
