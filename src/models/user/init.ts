import * as bitcoinjs from 'bitcoinjs-lib';

import { $user, fetchAddressBalanceFx, sendBitcoinsFx, sendUserBitcoinsFx, updateUserBalanceFx } from ".";
import { getAddressBalanceReq, getLastTransactionReq, sendTransactionReq } from "../../api/api";
import { bitcoinToSat } from '../../common/bitcoinToSat';
import { getAddressIndexInTransaction } from "../../common/getAddressIndexInTransaction";
import { satToBitcoin } from '../../common/satToBitcoin';

fetchAddressBalanceFx.use(getAddressBalanceReq);
sendBitcoinsFx.use(async ({from, to, value, balance, fee, bitcoinInfo}) => {
  const lastTransaction = await getLastTransactionReq(from);
  if(!lastTransaction) throw new Error('sendBitcoinsFx not last transaction');

  const addressIndexInLastTransaction = getAddressIndexInTransaction(
    from, lastTransaction
  )

  debugger

  const balanceSat = bitcoinToSat(balance);
  const valueSat = bitcoinToSat(value);
  const feeSat = bitcoinToSat(fee);
  const finalBalanceSat = balanceSat - valueSat - feeSat;
  const txb = new bitcoinjs.TransactionBuilder(bitcoinjs.networks.testnet);

  txb.addInput(lastTransaction.txid, addressIndexInLastTransaction);
  txb.addOutput(to, valueSat);
  txb.addOutput(from, finalBalanceSat);

  txb.sign(0, bitcoinInfo);

  const result = await sendTransactionReq(txb.build().toHex());

  if(!result) throw new Error('not created transaction');

  return satToBitcoin(finalBalanceSat);
})

$user.on([
  updateUserBalanceFx.doneData,
  sendUserBitcoinsFx.doneData
], (userInfo, newBalance) => ({
  ...userInfo,
  balance: newBalance
}));