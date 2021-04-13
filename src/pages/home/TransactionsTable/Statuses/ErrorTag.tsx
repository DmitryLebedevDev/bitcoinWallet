import React from 'react'
import { makeStyles } from '@material-ui/core'

import { commonStylesObj } from './commonStyles'

const useStyles = makeStyles({
  ...commonStylesObj,
  red: {
    color: '#cf1322',
    background: '#fff1f0',
    borderColor: '#ffa39e'
  }
})

export const ErrorTag = () => {

  const classes = useStyles()
  return (
    <div className={`${classes.status} ${classes.red}`}>
      Error
    </div>
  )
}
