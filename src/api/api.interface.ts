export interface Itransaction {
  hash: string,
  txid: string,
  outputs: [{
    addresses: [string],
  }, {
    addresses: [string],
  }],
}
export interface IaddressInfoRes {
  address: {
    address: string,
    confirmed: {
      balance: number
    },
    transactions: Itransaction[]
  }
}
export interface IResStatus {
  success: string
}