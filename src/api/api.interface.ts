export interface Itransaction {
  hash: string,
  txid: string,
  confirmations: number,
  fee: string
  outputs: [{
    addresses: [string],
  }, {
    addresses: [string],
  }],
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