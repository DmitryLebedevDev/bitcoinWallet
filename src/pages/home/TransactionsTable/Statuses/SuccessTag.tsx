import React from 'react'
import { makeStyles } from '@material-ui/core'

import { commonStylesObj } from './commonStyles'

const useStyles = makeStyles({
  ...commonStylesObj,
  yellow: {
    color: '#389e0d',
    background: '#f6ffed',
    borderColor: '#b7eb8f',
  }
})

export const SuccessTag = () => {

  const classes = useStyles()
  return (
    <div className={`${classes.status} ${classes.yellow}`}>
      Success
    </div>
  )
}
