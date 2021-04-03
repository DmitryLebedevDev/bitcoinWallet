import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  status: {
    display: 'inline-block',
    fontWeight: 900,
    padding: '4px',
    color: '#8b7400',
    border: '2px solid #8b7400',
    borderRadius: '2px',
  }
})

export const Panding = () => {

  const classes = useStyles();
  return (
    <div className={classes.status}>
      Panding
    </div>
  )
}
