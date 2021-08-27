import React from 'react'
import { Box } from '@material-ui/core'
import NameAndSourceItem from './NameAndSourceItem'

function NameAndSourceArray({classesArray, title}) {
    if (!classesArray) return '';
    let total = classesArray.length;
    let counter = 0;
    
    return (
        <Box pt={2}>
            <b>{title}:</b>  {classesArray.map( (entry, key) => (
                <NameAndSourceItem key={key} item={entry} total={total} counter={++counter}/>
            ) )}
        </Box>
    )
}

export default NameAndSourceArray
