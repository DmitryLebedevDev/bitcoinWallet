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
  transactionsTableBlock: {
    marginTop: '15px'
  },
  tableContainer: {
    maxHeight: 'calc(100vh - 420px)'
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
    <div className={classes.transactionsTableBlock}>
      <Typography variant='h5' gutterBottom>
        Transactions list
      </Typography>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table stickyHeader size='small'>
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