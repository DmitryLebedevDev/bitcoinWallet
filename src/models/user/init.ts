import * as bitcoinjs from 'bitcoinjs-lib'

import {
  $user,
  fetchAddressBalanceFx, fetchUserWalletDataAndSetFx,
  sendBitcoinsFx,
  sendUserBitcoinsFx, setUserBalanceEvent, setUserTransactionsEvent,
  updateUserBalanceFx
} from "."
import {
  getAddressBalanceReq,
  getUnspentTransactionsReq, getWalletDataReq,
  sendTransactionReq
} from "../../api/api"
import { bitcoinToSat } from '../../common/bitcoinToSat'
import { satToBitcoin } from '../../common/satToBitcoin'

fetchAddressBalanceFx.use(getAddressBalanceReq)
fetchUserWalletDataAndSetFx.use(async (address) => {
  const userWalletData = await getWalletDataReq(address);
  setUserBalanceEvent(+userWalletData.total.balance);
  setUserTransactionsEvent(userWalletData.transactions);
})
sendBitcoinsFx.use(async ({from, to, value, balance, fee, bitcoinInfo}) => {
  const unspentTransactions = await getUnspentTransactionsReq(from)
  if(!unspentTransactions.length) throw new Error(
    'sendBitcoinsFx not unspent transactions'
  )

  const balanceSat = bitcoinToSat(balance)
  const valueSat = bitcoinToSat(value)
  const feeSat = bitcoinToSat(fee)
  const finalBalanceSat = balanceSat - valueSat - feeSat

  const txb = unspentTransactions.reduce(
    (txb, unspentTransaction) => {
      txb.addInput(unspentTransaction.txid, unspentTransaction.n)

      return txb
    },
    new bitcoinjs.TransactionBuilder(bitcoinjs.networks.testnet)
  )

  txb.addOutput(to,valueSat)
  txb.addOutput(from, finalBalanceSat)

  unspentTransactions.forEach((_, index) => {
    txb.sign(index, bitcoinInfo);
  })

  console.log(txb.build().toHex());
  //const result = await sendTransactionReq(txb.build().toHex())
  //if(!result) throw new Error('not created transaction')

  return satToBitcoin(finalBalanceSat)
})

$user.on([
  updateUserBalanceFx.doneData,
  sendUserBitcoinsFx.doneData
], (userInfo, newBalance) => ({
  ...userInfo,
  balance: newBalance
}))