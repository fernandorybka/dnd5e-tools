import React from "react";

function NameAndSourceItem({ item, total, counter, mainClass }) {
  if (item.subclass) {
    return (
        <NameAndSourceItem item={item.subclass} total={total} counter={counter} mainClass={item.class.name} />
    )
  } else {
    return (
      <span
        title={`Class source: ${item.source}. ${
          item.definedInSource
            ? ` Spell list defined in: ${item.definedInSource}.`
            : ""
        }`}
      >
        {mainClass ? `${mainClass} ` : '' }{item.name}
        {counter < total ? ", " : ""}
      </span>
    );
  }
}

export default NameAndSourceItem;
