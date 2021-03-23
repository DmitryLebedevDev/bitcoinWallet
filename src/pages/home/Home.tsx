import React from 'react'
import { useStore } from 'effector-react';
import { makeStyles } from '@material-ui/core';

import { $user } from '../../models/user';
import { Balance } from './Balance/Balance';
import { UserInfo } from './UserInfo/UserInfo';

const useStyles = makeStyles({})

export const Home = () => {
  const user = useStore($user)

  const classes = useStyles();
  return (
    <div className="container">
      <Balance value={12}/>
      <UserInfo {...user}/>
    </div>
  )
}
