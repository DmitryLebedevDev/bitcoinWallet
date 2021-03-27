import React, { useState } from 'react'
import { useStore } from 'effector-react';
import { makeStyles } from '@material-ui/core';
import { Route, Switch, useHistory } from 'react-router-dom'

import { $user } from '../../models/user';
import { Balance } from './Balance/Balance';
import { UserAddress } from './UserAddress/UserAddress';
import { SendBitcoinForm } from '../../dialogs/SendBitcoinForm';

const useStyles = makeStyles({})

export const Home = () => {
  const user = useStore($user)
  const history = useHistory();

  const classes = useStyles();
  return (
    <div className="container">
      <Balance value={12}/>
      <UserAddress address={user.address}/>
      <Switch>
        <Route path="/sendBitcoins" render={() => (
          <SendBitcoinForm
            open={true}
            handleClose={() => history.push('/')}
          />
        )}/>
      </Switch>
    </div>
  )
}
