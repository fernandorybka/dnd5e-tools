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
            case 'quote': 
                return (
                    <div style={{paddingBottom: "20px", paddingLeft: "35px", fontStyle: "italic"}}> 
                        {entry.entries.map((item, key) => (
                            <Entry key={key} entry={item} />
                        ))}
                        <b>By {entry.by}</b>
                    </div>
                )
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
                throw new Error('Entry has type: '+entry.type);
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

