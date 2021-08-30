import React from 'react'

const simpleTagReplace = (stringText, ...tags) => {
  let finalString = stringText;
  tags.map( (tag, index)  => {
    let reg = new RegExp("{@" + tag + "\\s(\\w+)\\s*}", "g");
    finalString = finalString.replace( reg, function(match, tagval) { return `${tagval}`});
  });
  return finalString;
}


function SanitizedText({text}) {
    let stringText = String( text );
    let i;
  
  stringText = simpleTagReplace(stringText, 'skill', 'damage', 'dice', 'creature', 
  'condition', 'spell', 'sense', 'scaledamage', 'hit', 'chance');

    while( (i = stringText.indexOf("{@")) > -1) {
        let specialTag = stringText.substring(i, stringText.indexOf('}', i));
        if (specialTag.startsWith('{@filter') || specialTag.startsWith('{@item')) {
            stringText = stringText.substring(0,i) + 
                         stringText.substring(i+9,stringText.indexOf('|')) +
                         stringText.substring(stringText.indexOf("}")+1);
        } else {
            console.log( 'Tag '+specialTag+' unsanitized' );
            stringText = stringText.replaceAll(specialTag, '')
        }         
    }
    stringText = stringText.replaceAll('}', '');
    
    return (
        <a>
          {stringText}  
        </a>
    )
}

export default SanitizedText

