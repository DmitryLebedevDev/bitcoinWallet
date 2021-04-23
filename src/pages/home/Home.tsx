import React from 'react'
import { useStore } from 'effector-react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { $user } from '../../models/user'
import { Balance } from './Balance/Balance'
import { UserAddress } from './UserAddress/UserAddress'
import { SendBitcoinForm } from '../../dialogs/SendBitcoinForm'
import { ViewUserPrivateKey } from '../../dialogs/ViewUserPrivateKey'
import { TransactionsTable } from './TransactionsTable/TransactionsTable'

export const Home = () => {
  const user = useStore($user);
  const history = useHistory();

  return (
    <div className="container">
      <Balance value={user.balance}/>
      <UserAddress address={user.address}/>
      <TransactionsTable />
      <Switch>
        <Route path="/viewKeys" render={() => (
          <ViewUserPrivateKey
            privateKey={user.privateKey}
            open={true}
            handleClose={() => history.push('/')}
          />
        )}/>
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
