import { Itransaction } from "../api/api.interface";

export const getAddressIndexInTransaction = (address: string, transaction: Itransaction) => {
  let addressIndex
   = transaction
     .outputs[0]
     .addresses
     .indexOf(address) >= 0 ?
     0 : 1;

  return addressIndex;
}