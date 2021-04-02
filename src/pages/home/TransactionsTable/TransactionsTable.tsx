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

const useStyles = makeStyles({
  tableBlock: {
    marginTop: '15px'
  }
})

export const TransactionsTable:FC = () => {

  const classes = useStyles();
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
                From address
              </TableCell>
              <TableCell>
                Value
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                1
              </TableCell>
              <TableCell>
                2
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}