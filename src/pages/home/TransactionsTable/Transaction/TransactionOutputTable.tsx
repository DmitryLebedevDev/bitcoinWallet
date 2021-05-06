import React, {FC} from "react";
import {Table, TableBody, TableCell, TableHead} from "@material-ui/core";
import {ItransactionOutput} from "../../../../api/api.interface";

interface Iprops {
  outputs: ItransactionOutput[]
}

export const TransactionOutputTable:FC<Iprops> = ({outputs}) => {
  return (
    <Table size="small">
      <TableHead>
        <TableCell>Address</TableCell>
      </TableHead>
      <TableBody>
        {outputs.map(({addresses}, index) => {
          return <TableCell key={index}>{addresses.join(',')}</TableCell>
        })}
      </TableBody>
    </Table>
  )
}