import React, { FC } from "react";
import { Itransaction } from '../../../../api/api.interface'
import { IconButton, TableCell, TableRow } from "@material-ui/core"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { SuccessTag } from "../Statuses/SuccessTag"

export const Transaction:FC<Itransaction> = (
  {txid, hash, fee, confirmations, outputs}
) => {
  return (
    <TableRow key={txid}>
      <TableCell>
        <IconButton aria-label="expand row" size="small">
          <KeyboardArrowUpIcon />
          <KeyboardArrowDownIcon/>
        </IconButton>
      </TableCell>
      <TableCell>
        {txid}
      </TableCell>
      <TableCell>
        {hash}
      </TableCell>
      <TableCell>
        {fee}
      </TableCell>
      <TableCell>
        {confirmations}
      </TableCell>
      <TableCell>
        <SuccessTag/>
      </TableCell>
    </TableRow>
  )
}