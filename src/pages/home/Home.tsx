import React from 'react'
import { useStore } from 'effector-react';
import { $user } from '../../models/user';
import { makeStyles, TextField } from '@material-ui/core';

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

export const Home = () => {
  const user = useStore($user)

  const classes = useStyles();
  return (
    <div className="container">
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
    </div>
  )
}
