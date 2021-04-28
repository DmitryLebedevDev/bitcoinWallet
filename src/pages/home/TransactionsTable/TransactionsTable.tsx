import React, { FC } from 'react'
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'
import { PendingTag } from './Statuses/PendingTag'
import { SuccessTag } from './Statuses/SuccessTag'
import { ErrorTag } from "./Statuses/ErrorTag"
import {Transaction} from "bitcoinjs-lib"
import {Itransaction} from "../../../api/api.interface"

const useStyles = makeStyles({
  tableBlock: {
    marginTop: '15px'
  }
})

interface Iprops {
  transactions: Itransaction[]
}
export const TransactionsTable:FC<Iprops> = ({transactions}) => {
  const classes = useStyles()

  if(!transactions.length) {
    return <></>
  }
  return (
    <div className={classes.tableBlock}>
      <Typography variant="h5" gutterBottom>
        Transactions list
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                Txid
              </TableCell>
              <TableCell>
                Hash
              </TableCell>
              <TableCell>
                Fee
              </TableCell>
              <TableCell>
                Confirmations
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map(({txid, hash, fee, confirmations}) => (
              <TableRow key={txid}>
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}