import { makeStyles } from '@material-ui/core'
import React, { FC } from 'react'

const useStyles = makeStyles({
  circle: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '250px',
    maxHeight: '250px',
    width: 'calc(100vw - 40px)',
    height: 'calc(100vw - 40px)',
    fontSize: '30px',
    margin: '20px auto',
    marginTop: '0px',
    borderRadius: '50%',
    color: 'white',
    backgroundColor: '#1976d2',
    boxShadow: '0 0 30px #1976d2',
    animation: '$ripple 4s ease-in-out infinite'
  },
  '@keyframes ripple': {
    '0%': {
      boxShadow: '0 0 30px #1976d2'
    },
    '50%': {
      boxShadow: '0 0 15px #1976d2'
    },
    '100%': {
      boxShadow: '0 0 30px #1976d2'
    }
  }
})

interface Iprops {
  value: number
}

export const Balance:FC<Iprops> = ({value}) => {
  const classes = useStyles();

  return (
    <div className={classes.circle}>
      {`${value}₿`}
    </div>
  )
}
