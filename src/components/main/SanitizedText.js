import React from 'react'

function SanitizedText({text, key}) {
    let stringText = String( text );
    let i;

    stringText = stringText.replaceAll('{@damage', '')
    .replaceAll('{@dice', '')
    .replaceAll('{@creature', '')
    .replaceAll('{@condition', '')
    .replaceAll('{@spell', '')
    .replaceAll('{@skill', '')
    .replaceAll('{@sense', '')
    .replaceAll('{@scaledamage', '')
    .replaceAll('{@hit', '')
    .replaceAll('{@chance', '');

    while( (i = stringText.indexOf("{@")) > -1) {
        let specialTag = stringText.substring(i, stringText.indexOf('}', i));
        if (specialTag.startsWith('{@filter') || specialTag.startsWith('{@item')) {
            stringText = stringText.substring(0,i) + 
                         stringText.substring(i+9,stringText.indexOf('|')) +
                         stringText.substring(stringText.indexOf("}"));
        } else {
            console.log( 'Tag '+specialTag+' unsanitized' );
            stringText = stringText.replaceAll(specialTag, '')
        }         
    }
    stringText = stringText.replaceAll('}', '');

    return (
        <a key={key}>
          {stringText}  
        </a>
    )
}

export default SanitizedText

