import axios from 'axios'

import {
  IaddressInfoRes,
  IResStatus,
  IunspentTransactionsRes,
  IunspentTransaction
} from './api.interface'

const api = axios.create({
  baseURL: 'https://testnet-api.smartbit.com.au/v1/blockchain/'
})

export const getAddressBalanceReq = (address: string) => api.get<IaddressInfoRes>(
  `address/${address}`
).then(({
  data: {
    address: {
      confirmed: {balance}
    }
  }
}) => +balance)
export const getUnspentTransactionsReq = (address: string) => axios.get<IunspentTransactionsRes>(
  `address/${address}/unspent`
).then<IunspentTransaction[]>(({
  data: {
    unspent
  }
}) => unspent)
export const sendTransactionReq = (hex: string) => axios.post<IResStatus>(
  `blockchain/pushtx`,
  {hex}
)