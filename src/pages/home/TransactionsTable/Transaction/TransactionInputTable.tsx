import {ItransactionInput} from "../../../../api/api.interface";
import React, {FC} from "react";
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";

interface Iprops {
  inputs: ItransactionInput[]
}

export const TransactionInputTable:FC<Iprops> = ({inputs}) => {
  console.log(inputs)
  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Inputs
      </Typography>
      <Table size="small">
        <TableHead>
          <TableCell>Address</TableCell>
          <TableCell>Txid</TableCell>
          <TableCell>Value</TableCell>
          <TableCell>ScriptSig</TableCell>
        </TableHead>
        <TableBody>
          {inputs.map(({addresses, txid, value, script_sig: {asm}}, index) => (
            <TableRow key={index}>
              <TableCell colSpan={1}>{addresses.join(',')}</TableCell>
              <TableCell>{txid}</TableCell>
              <TableCell>{value}</TableCell>
              <TableCell>{asm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}