import React from 'react'
import { List, ListItem } from '@material-ui/core'
import SanitizedText from './SanitizedText'

function EntryList({entry}) {
    return (
        <List>
            {entry.items.map((item, key) => (
                <ListItem key={key}>
                    <SanitizedText text={item} />
                </ListItem>
            ))}
        </List>
    )
}


export default EntryList

