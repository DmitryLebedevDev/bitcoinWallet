import { ECPairInterface } from 'bitcoinjs-lib'
import { Itransaction } from '../../api/api.interface';

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
  balance: number,
  transactions: Itransaction[]
}
