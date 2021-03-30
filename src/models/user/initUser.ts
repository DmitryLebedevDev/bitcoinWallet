import { generateUserData } from "./generateUserData"

export const initUser = () => {
  const wif = localStorage.getItem('wif')
  const user = generateUserData(wif)

  !wif && localStorage.setItem('wif', user.bitcoinInfo.toWIF())

  return user
}