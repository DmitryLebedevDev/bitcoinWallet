import React from 'react'
import { makeStyles } from '@material-ui/core'

import { commonStylesObj } from './commonStyles'

const useStyles = makeStyles({
  ...commonStylesObj,
  yellow: {
    color: '#8b7400',
    borderColor: '#8b7400',
  }
})

export const Panding = () => {

  const classes = useStyles()
  return (
    <div className={`${classes.status} ${classes.yellow}`}>
      Panding
    </div>
  )
}
