import React from 'react'
import { TableCell } from '@material-ui/core'
import SanitizedText from './SanitizedText'

function EntryTableRow({cell}) {
    if (cell.type) {
        console.log(cell.roll.min);
        return (
            <TableCell>
                {cell.roll.min &&
                    <>From {cell.roll.min}</>
                }
                {cell.roll.max &&
                    <> to {cell.roll.max}</>
                }
                {cell.roll.exact &&
                    <><b>Exact:</b> {cell.roll.exact}</>
                }
            </TableCell>
        )
    } else {
        return (
            <TableCell>{cell}</TableCell>
        )
    }
}


export default EntryTableRow

