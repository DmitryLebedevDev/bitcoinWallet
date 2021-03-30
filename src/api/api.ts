import axios from 'axios'
import { IaddressInfoRes, Itransaction, IResStatus } from './api.interface';

export const getAddressBalanceReq = (address: string) => axios.get<IaddressInfoRes>(
  `https://testnet-api.smartbit.com.au/v1/blockchain/address/${address}`
).then(({
  data: {
    address: {
      confirmed: {balance}
    }
  }
}) => +balance)
export const getLastTransactionReq = (address: string) => axios.get<IaddressInfoRes>(
  `https://testnet-api.smartbit.com.au/v1/blockchain/address/${address}`
).then<Itransaction | undefined>(({
  data: {
    address: {
      transactions
    }
  }
}) => transactions[0])
export const sendTransactionReq = (hex: string) => axios.post<IResStatus>(
  `https://testnet-api.smartbit.com.au/v1/blockchain/pushtx`,
  {hex}
)