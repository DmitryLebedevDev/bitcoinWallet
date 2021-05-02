import React, { FC, useCallback, useState } from "react"
import { Itransaction } from '../../../../api/api.interface'
import { IconButton, makeStyles, TableCell, TableRow } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { SuccessTag } from "../Statuses/SuccessTag"
import Collapse from '@material-ui/core/Collapse'

const useStyles = makeStyles({
  utxoTableWrap: {
    paddingBottom: 0,
    paddingTop: 0,
    border: "none"
  }
})

export const Transaction:FC<Itransaction> = (
  {txid, hash, fee, confirmations, outputs}
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
      <TableCell className={classes.utxoTableWrap}>
        <Collapse in={isOpen}>
          <div>
            test
          </div>
        </Collapse>
      </TableCell>
    </>
  )
}