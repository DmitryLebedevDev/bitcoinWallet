export interface Itransaction {
  hash: string,
  txid: string,
  confirmations: number,
  fee: string
  input_amount: string,
  output_amount: string,
  inputs: ItransactionInput[]
  outputs: ItransactionOutput[]
}
export interface ItransactionInput {
  addresses: string[]
  script_sig: {
    asm: string,
    hex: string
  }
  sequence: number
  txid: string
  type: string
  value: string
  value_int: number
  vout: number
}
export interface ItransactionOutput {
  addresses: string[]
  n: number,
  script_pub_key: {
    asm: string,
    hex: string
  },
  type: string
  value: string
  value_int: number
}

export interface IunspentTransaction {
  txid: string,
  n: number,
}
export interface IunspentTransactionsRes {
  unspent: IunspentTransaction[]
}

export interface IaddressInfoRes {
  address: {
    address: string,
    total: {
      balance: string
    },
    confirmed: {
      balance: string
    },
    transactions: Itransaction[]
  }
}
export interface IResStatus {
  success: string
}