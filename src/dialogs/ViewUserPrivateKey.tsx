import React, { FC } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core'

interface Iprops {
  privateKey: string,
  open: boolean,
  handleClose: () => void,
}

export const ViewUserPrivateKey:FC<Iprops> =
({open, handleClose, privateKey}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      disableRestoreFocus
    >
      <DialogTitle>
        Private key
      </DialogTitle>
      <DialogContent>
        <TextField
          value={privateKey}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color='primary'
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}
