import React from "react";
import Card from "./CardProvider";
import CardListContainer from "./CardListContainer";

function CardList({ type, listName, items }) {

  // connect items by siblings
  let itemsConnectedBySibling = items;
  for( var i = 0; i < itemsConnectedBySibling.length; i++ ) {
    if (i > 0) {
      itemsConnectedBySibling[i].prev = itemsConnectedBySibling[i-1]
    } else {delete itemsConnectedBySibling[i].prev}
    if (i < itemsConnectedBySibling.length-1) {
      itemsConnectedBySibling[i].next = itemsConnectedBySibling[i+1];
    } else {delete itemsConnectedBySibling[i].next}
  }

  return (
    <CardListContainer listName={listName} type={type}>

      {itemsConnectedBySibling.map((item, key) => (
        <Card type={type} key={key} item={item} />
      ))}

    </CardListContainer>
  );
}

export default CardList;
