import React, { FC, useCallback, useState } from "react"
import { Itransaction } from '../../../../api/api.interface'
import {Box, IconButton, makeStyles, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { SuccessTag } from "../Statuses/SuccessTag"
import Collapse from '@material-ui/core/Collapse'
import {TransactionOutputTable} from "./TransactionOutputTable";
import {TransactionInputTable} from "./TransactionInputTable";

const useStyles = makeStyles({
  utxoTableWrap: {
    paddingBottom: 0,
    paddingTop: 0,
    border: "none"
  }
})

export const Transaction:FC<Itransaction> = (
  {txid, input_amount, output_amount, fee, confirmations, outputs, inputs}
) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpenBtn = useCallback(
    () => setIsOpen(isOpen => !isOpen),
    [setIsOpen]
  )

  const classes = useStyles();
  return (
    <>
      <TableRow key={txid}>
        <TableCell>
          <IconButton onClick={handleClickOpenBtn}
                      size="small"
          >
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon/>}
          </IconButton>
        </TableCell>
        <TableCell>
          {txid}
        </TableCell>
        <TableCell>
          {input_amount}
        </TableCell>
        <TableCell>
          {output_amount}
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
      <TableCell className={classes.utxoTableWrap} colSpan={7}>
        <Collapse in={isOpen}>
          <Box margin={1}>
            <TransactionInputTable inputs={inputs}/>
            <TransactionOutputTable outputs={outputs}/>
          </Box>
        </Collapse>
      </TableCell>
    </>
  )
}