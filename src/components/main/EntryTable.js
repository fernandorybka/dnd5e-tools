import React from "react";
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import EntryTableRow from "./EntryTableRow";

// type": "table",
//           "caption": "Precipitation",
//           "colLabels": ["Stage", "Condition"],
//           "colStyles": ["col-1 text-center", "col-11"],
//           "rows": [
//             ["1", "Clear"],
//             ["2", "Light clouds"],
//             ["3", "Overcast or ground fog"],
//             ["4", "Rain, hail, or snow"],
//             ["5", "Torrential rain, driving hail, or blizzard"]
//           ]

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
