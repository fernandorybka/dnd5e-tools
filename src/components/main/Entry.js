import React from 'react'
import EntryList from './EntryList';
import EntryTable from './EntryTable';
import SanitizedText from './SanitizedText';

function Entry({entry}) {

    if ( entry.type ) {
        switch( entry.type ) {
            case 'list': 
                return ( <EntryList entry={entry} /> )
            case 'table': 
                return ( <EntryTable entry={entry} /> )
            case 'entries': 
                return ( 
                    <div> 
                        <b>{entry.name}: </b>
                        {entry.entries.map((item, key) => (
                            <Entry key={key} entry={item} />
                        ))}
                    </div>
                 )
            default: 
                throw 'Entry has type: '+entry.type;
        }
    } else {
        return (
            <div style={{paddingBottom: '8px'}} >
                <SanitizedText text={entry} />        
            </div>
        )
    }
}


export default Entry

