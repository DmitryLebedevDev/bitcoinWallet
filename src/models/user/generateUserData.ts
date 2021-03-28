import { Iuser } from "./types";
import * as bitcoin from 'bitcoinjs-lib';

import { bufferToHex } from "../../common/ bufferToHex";

export const generateUserData = (wif: string | null):Iuser => {
  console.log(wif);
  const randomBitcoinData = wif ?
    bitcoin.ECPair.fromWIF(wif)
    :
    bitcoin.ECPair.makeRandom();
  const { address } = bitcoin.payments.p2pkh({pubkey: randomBitcoinData.publicKey});

  return ({
    bitcoinInfo: randomBitcoinData,
    privateKey: randomBitcoinData.toWIF(),
    address: address as string
  })
}