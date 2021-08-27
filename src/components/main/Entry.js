import React from 'react'
import EntryList from './EntryList';
import EntryTable from './EntryTable';
import SanitizedText from './SanitizedText';

function Entry({entry, key}) {

    if ( entry.type ) {
        switch( entry.type ) {
            case 'list': 
                return ( <EntryList key={key ? `${key}l` : undefined} entry={entry} /> )
            break;
            case 'table': 
                return ( <EntryTable key={key ? `${key}t` : undefined} entry={entry} /> )
            break;
            default: 
                throw 'Entry has type: '+entry.type;
        }
    } else {
        return (
                <SanitizedText key={key ? `${key}e` : undefined} text={entry} />        
        )
    }
}


export default Entry
