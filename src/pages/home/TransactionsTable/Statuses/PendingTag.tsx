import React from 'react'
import { makeStyles } from '@material-ui/core'

import { commonStylesObj } from './commonStyles'

const useStyles = makeStyles({
  ...commonStylesObj,
  yellow: {
    color: '#d48806',
    background: '#fffbe6',
    borderColor: '#ffe58f'
  }
})

export const PendingTag = () => {

  const classes = useStyles()
  return (
    <div className={`${classes.status} ${classes.yellow}`}>
      Pending
    </div>
  )
}
