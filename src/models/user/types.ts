import { ECPairInterface } from "bitcoinjs-lib";

export interface IsendBitconFxData {
  value: number,
  fee: number,
  from: string,
  to: string,
  balance: number,
  bitcoinInfo: ECPairInterface
}

export interface Iuser {
  bitcoinInfo: ECPairInterface,
  privateKey: string,
  address: string,
  balance: number
}
