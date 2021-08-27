import React from "react";

function NameAndSourceItem({ key, item, total, counter, mainClass }) {
  if (item.subclass) {
    return (
        <NameAndSourceItem key={`${key}s`} item={item.subclass} total={total} counter={counter} mainClass={item.class.name} />
    )
  } else {
    return (
      <span
        key={key}
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
