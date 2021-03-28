import React, { FC } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core'
import Send from '@material-ui/icons/Send'

interface Iprops {
  open: boolean,
  handleClose: () => void
}

export const SendBitcoinForm:FC<Iprops> = (
  {open, handleClose}
) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      disableRestoreFocus
    >
      <DialogTitle>
        Send bitcoins
      </DialogTitle>
      <DialogContent>
        <TextField
          helperText="send to address"
          fullWidth
        />
        <TextField
          type="number"
          helperText="value"
          inputProps={{min: 0, max: 10, step: 0.01}}
          fullWidth
        />
        <TextField
          type="number"
          helperText="reword for miner"
          inputProps={{min: 0, max: 10, step: 0.001}}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          color="primary"
          endIcon={<Send/>}
        >
          Send
        </Button>
      </DialogActions>
    </Dialog>
  )
}
