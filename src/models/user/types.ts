import { ECPairInterface } from "bitcoinjs-lib";

export interface Iuser {
  bitcoinInfo: ECPairInterface,
  privateKey: string,
  address: string
}
