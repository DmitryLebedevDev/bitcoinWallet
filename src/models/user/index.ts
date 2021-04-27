import { attach, createEffect, createEvent, createStore } from 'effector'

import { initUser } from './initUser'
import { IsendBitconFxData } from './types'
import {Itransaction} from '../../api/api.interface'

export const $user = createStore(
  initUser()
)

export const setUserTransactionsEvent = createEvent<Itransaction[]>()
export const setUserBalanceEvent = createEvent<number>()

export const fetchAddressBalanceFx = createEffect<string, number>()
export const updateUserBalanceFx = attach({
  effect: fetchAddressBalanceFx,
  source: $user,
  mapParams: (_, {address}) => {
    return address
  }
})
export const fetchUserWalletDataAndSetFx = createEffect<string, void>()
export const initUserWalletDataFx = attach({
  source: $user,
  effect: fetchUserWalletDataAndSetFx,
  mapParams: (_: any, {address}) => {
    return address
  }
})

export const sendBitcoinsFx = createEffect<IsendBitconFxData, number>()
export const sendUserBitcoinsFx = attach({
  effect: sendBitcoinsFx,
  source: $user,
  mapParams: (
    {value, fee, to}: Pick<IsendBitconFxData, 'value' | 'fee' | 'to'>,
    user
  ) => {
    return {
      value,
      fee,
      to,
      from: user.address,
      balance: user.balance,
      bitcoinInfo: user.bitcoinInfo,
    }
  }
})