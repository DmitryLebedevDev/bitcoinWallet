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
import {Itransaction} from '../../../api/api.interface'
import {Transaction} from './Transaction/Transaction'

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
              <TableCell/>
              <TableCell>
                Txid
              </TableCell>
              <TableCell>
                Input
              </TableCell>
              <TableCell>
                Output
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
            {transactions.map(
              (transactionData) => <Transaction {...transactionData}/>)
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}