import React, { FC } from 'react'
import { TextField } from '@material-ui/core'

interface Iprops {
  privateKey: string,
  publicKey: string
}

export const UserKeys:FC<Iprops> = ({privateKey, publicKey}) => {
  const classes: any = {};

  return (
    <div>
      <div className={classes.userInfoField}>
        <TextField fullWidth value={privateKey}/>
        <span className={classes.userInfoFieldHelperText}>
          - private key
        </span>
      </div>
      <div className={classes.userInfoField}>
        <TextField fullWidth value={publicKey}/>
        <span className={classes.userInfoFieldHelperText}>
          - public key
        </span>
      </div>
    </div>
  )
}
