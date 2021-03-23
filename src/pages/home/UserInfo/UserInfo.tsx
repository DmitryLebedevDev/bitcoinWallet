import React, { FC } from 'react'
import { makeStyles, TextField } from '@material-ui/core';

import { Iuser } from '../../../models/user/types'

const useStyles = makeStyles({
  fields: {
    '& > * + *': {
      marginTop: '8px'
    }
  },
  userInfoField: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    '& > .MuiTextField-root': {
      width: '600px',
      marginRight: '5px',
    }
  },
  userInfoFieldHelperText: {
    flexShrink: 0,
    width: '116px',
  }
})

export const UserInfo:FC<Iuser> = (user) => {
  const classes = useStyles();
  return (
    <div className={classes.fields}>
      <div className={classes.userInfoField}>
        <TextField value={user.privateKey}/>
        <span className={classes.userInfoFieldHelperText}>
          - private key
        </span>
      </div>
      <div className={classes.userInfoField}>
        <TextField value={user.publicKey}/>
        <span className={classes.userInfoFieldHelperText}>
          - public key
        </span>
      </div>
      <div className={classes.userInfoField}>
        <TextField value={user.address}/>
        <span className={classes.userInfoFieldHelperText}>
          - address
        </span>
      </div>
    </div>
  )
}
