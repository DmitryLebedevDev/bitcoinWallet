import React, { FC } from 'react'
import { makeStyles, TextField } from '@material-ui/core'

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
  const classes = useStyles()
  return (
    <div className={classes.userAddress}>
      <TextField fullWidth value={address}/>
      <span>
        your address
      </span>
    </div>
  )
}
