import React from 'react'

function SanitizedText({text, key}) {
    let stringText = String( text );
    let i;
    if ((i = stringText.indexOf("{@filter")) > -1) {
        stringText = stringText.substring(0, stringText.indexOf('|')).replace("{@filter", "");
    }
    return (
        <a key={key}>
          {stringText}  
        </a>
    )
}

export default SanitizedText

