import React, {FC} from 'react'
import {Table, TableBody, TableCell, TableHead, Typography} from '@material-ui/core'
import {ItransactionOutput} from '../../../../api/api.interface'

interface Iprops {
  outputs: ItransactionOutput[]
}

export const TransactionOutputTable:FC<Iprops> = ({outputs}) => {
  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Outputs
      </Typography>
      <Table size="small">
        <TableHead>
          <TableCell>Address</TableCell>
        </TableHead>
        <TableBody>
          {outputs.map(({addresses}, index) => (
            <TableCell key={index}>{addresses.join(',')}</TableCell>
          ))}
        </TableBody>
      </Table>
    </>
  )
}