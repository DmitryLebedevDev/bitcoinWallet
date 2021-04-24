import * as bitcoin from 'bitcoinjs-lib'

import { Iuser } from "./types"

export const generateUserData = (wif: string | null):Iuser => {
  const randomBitcoinData = wif ?
    bitcoin.ECPair.fromWIF(wif, bitcoin.networks.testnet)
    :
    bitcoin.ECPair.makeRandom({
      network: bitcoin.networks.testnet
    })
  const { address } = bitcoin.payments.p2pkh({
    pubkey: randomBitcoinData.publicKey,
    network: bitcoin.networks.testnet
  })

  return ({
    bitcoinInfo: randomBitcoinData,
    privateKey: randomBitcoinData.toWIF(),
    address: address as string,
    balance: NaN,
    transactions: []
  })
}