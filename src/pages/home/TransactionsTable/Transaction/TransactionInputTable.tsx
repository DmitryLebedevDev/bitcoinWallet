import {ItransactionInput} from "../../../../api/api.interface";
import React, {FC} from "react";
import {Table, TableBody, TableCell, TableHead} from "@material-ui/core";

interface Iprops {
  inputs: ItransactionInput[]
}

export const TransactionInputTable:FC<Iprops> = ({inputs}) => {
  return (
    <Table size="small">
      <TableHead>
        <TableCell>Address</TableCell>
      </TableHead>
      <TableBody>
        {inputs.map(({addresses}, index) => {
          return <TableCell key={index}>{addresses.join(',')}</TableCell>
        })}
      </TableBody>
    </Table>
  )
}