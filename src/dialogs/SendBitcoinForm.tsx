import React, { FC, useRef } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core'
import Send from '@material-ui/icons/Send'

import { sendUserBitcoinsFx } from '../models/user'

interface Iprops {
  open: boolean,
  handleClose: () => void
}

export const SendBitcoinForm:FC<Iprops> = (
  {open, handleClose}
) => {
  // refactoring to formik
  const addressRef = useRef<HTMLInputElement | null>(null)
  const valueRef = useRef<HTMLInputElement | null>(null)
  const feeRef = useRef<HTMLInputElement | null>(null)

  const handleSend = async () => {
    if(
      addressRef.current &&
      valueRef.current &&
      feeRef.current
    ) {
      await sendUserBitcoinsFx({
        to: addressRef.current.value,
        value: +valueRef.current.value,
        fee: +feeRef.current.value
      })
      handleClose();
    }
  }

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
          inputRef={addressRef}
          helperText='send to address'
          fullWidth
        />
        <TextField
          inputRef={valueRef}
          type='number'
          helperText='value'
          inputProps={{min: 0, max: 10, step: 0.01}}
          fullWidth
        />
        <TextField
          inputRef={feeRef}
          type='number'
          helperText='reword for miner'
          inputProps={{min: 0, max: 10, step: 0.001}}
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
        <Button
          onClick={handleSend}
          color='primary'
          endIcon={<Send/>}
        >
          Send
        </Button>
      </DialogActions>
    </Dialog>
  )
}
