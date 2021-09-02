import React from "react";
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import EntryTableRow from "./EntryTableRow";

function EntryTable({ entry }) {
  return (
    <TableContainer style={{paddingTop: '32px'}} >
      <Table size="small" aria-label={entry.caption}>
        <TableHead>
          {entry.caption && (
            <TableRow>
              <TableCell colSpan={entry.colLabels.length}> <b>{entry.caption}</b> </TableCell>
            </TableRow>
          )}
          <TableRow>
            {entry.colLabels.map((row, key) => (
              <TableCell key={key} align="center">{row}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {entry.rows.map((row, key) => (
            <TableRow key={key}>
              {row.map((cell, keyCell) => (
                <EntryTableRow key={keyCell} cell={cell} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EntryTable;
