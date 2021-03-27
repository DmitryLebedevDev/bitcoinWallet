import React, { FC } from 'react'
import { Button, Icon, makeStyles, TextField } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom'
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import { Iuser } from '../../../models/user/types'

const useStyles = makeStyles({
  userAddress: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '25px',
    '& > * + *': {
      marginTop: '8px'
    },
    '& .MuiInput-input': {
      textAlign: 'inherit'
    }
  }
})

interface Iprops {
  address: string
}

export const UserAddress:FC<Iprops> = ({address}) => {
  const classes = useStyles();
  return (
    <div className={classes.userAddress}>
      <TextField fullWidth value={address}/>
      <span>
        your address
      </span>
    </div>
  )
}
