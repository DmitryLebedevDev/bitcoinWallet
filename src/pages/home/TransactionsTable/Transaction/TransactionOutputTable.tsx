import React, {FC} from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead, TableRow,
  Typography
} from '@material-ui/core'
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
          <TableCell>Value</TableCell>
          <TableCell>ScriptPubKey</TableCell>
          <TableCell>N</TableCell>
          <TableCell>Type</TableCell>
        </TableHead>
        <TableBody>
          {outputs.map(({
            addresses,
            script_pub_key,
            n,
            type,
            value
          }, index) => (
            <TableRow key={index}>
              <TableCell>{addresses.join(',')}</TableCell>
              <TableCell>{value}</TableCell>
              <TableCell>{script_pub_key.asm}</TableCell>
              <TableCell>{n}</TableCell>
              <TableCell>{type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}