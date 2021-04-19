import React from 'react'
import { useStore } from 'effector-react'
import { Route, Switch, useHistory } from 'react-router-dom'

import { $user } from '../../models/user'
import { Balance } from './Balance/Balance'
import { UserAddress } from './UserAddress/UserAddress'
import { SendBitcoinForm } from '../../dialogs/SendBitcoinForm'
import { ViewUserPrivateKey } from '../../dialogs/ViewUserPrivateKey'
import { TransactionsTable } from './TransactionsTable/TransactionsTable'
import * as bt from 'bitcoinjs-lib';
import { bufferFromHex } from '../../common/bufferFromHex';
import { txIdToHash } from '../../common/txIdToHash';
// @ts-ignore
import * as bip65 from 'bip65';
import { ECPairInterface, Transaction } from "bitcoinjs-lib";


const getUTCNow = () => new Date(new Date().toUTCString().slice(0,-4));
(window as any).getUTCNow = getUTCNow;
(window as any).bip65 = bip65;
(window as any).bufferFromHex = bufferFromHex;
(window as any).txIdToHash = txIdToHash;
(window as any).tx = new bt.Transaction();
(window as any).bt = bt;
const OPS = bt.script.OPS;

//1497730
function createTx(ecp: ECPairInterface) {
  const tx = new bt.Transaction();
  const lockTime = bip65.encode({utc: (+getUTCNow() / 1000) ^ 0});
  tx.addInput(
    txIdToHash('cfcddf83119e23fa0d11017d7be912633a50713ada1f073e0918b5b9e5dc8a9a'
  ), 0);
  tx.addOutput(bt.script.compile([
    bt.script.number.encode(lockTime),
    bt.script.OPS.OP_CHECKLOCKTIMEVERIFY,
    bt.script.OPS.OP_DROP
  ] ),1077730);
  const hash = tx.hashForSignature(
    0,
    bufferFromHex('76a9141bd45863c2fbc64064010afd7e502e1f0689526388ac'),
    bt.Transaction.SIGHASH_ALL
  )
  tx.setInputScript(0, bt.script.compile([
    bt.script.signature.encode(ecp.sign(hash), bt.Transaction.SIGHASH_ALL),
    ecp.publicKey
  ]))

  console.log(tx.toHex());
}
(window as any).createTx = createTx;



export const Home = () => {
  const user = useStore($user);
  (window as any).user = user;
  const history = useHistory();
  createTx(user.bitcoinInfo);

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
