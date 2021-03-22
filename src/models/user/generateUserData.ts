import { Iuser } from "./types";
import * as bitcoin from 'bitcoinjs-lib';

import { bufferToHex } from "../../common/ bufferToHex";

export const generateUserData = ():Iuser => {
  const randomBitcoinData = bitcoin.ECPair.makeRandom();
  const { address } = bitcoin.payments.p2pkh({pubkey: randomBitcoinData.publicKey});

  return ({
    bitcoinInfo: randomBitcoinData,
    privateKey: bufferToHex(randomBitcoinData.privateKey as Buffer),
    publicKey: bufferToHex(randomBitcoinData.publicKey),
    address: address as string
  })
}