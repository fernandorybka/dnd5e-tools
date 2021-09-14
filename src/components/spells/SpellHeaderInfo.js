import React, {memo} from "react";
import { SchoolsOfMagic } from "../../util/SchoolsOfMagic";

const componentsToString = (components) => {
    let componentsArray = components.v ? 'V ' : '';
    if (components.s) {
      componentsArray = componentsArray.concat('S ');
    }
    if (components.m) {
      componentsArray = componentsArray.concat('M');
    }
    return componentsArray;
  }
  
  const durationToString = (duration) => {
    let durationArray = [];
  
    duration.map((item) => {
      if (item.type === "timed") {
        durationArray.push(`${item.duration.amount} ${item.duration.type}${item.duration.amount > 1 ? 's' : ''}` )
      } else durationArray.push(item.type);
      return durationArray;
    });
    return durationArray.join(' | ');
  }
  
  const rangeToString = (range) => {
    if (range.distance && range.distance.amount) {
      return `${range.distance.amount} ${range.distance.type}`;
    } else {
      return range.type;
    }
  }

function SpellHeaderInfo({ spell }) {
  if (!spell) return (<></>);
  return (
    <div>
      {spell.level}st-level {SchoolsOfMagic[spell.school]}
      <br />
      <b>Casting Time:</b>
      {spell.time.map((spell, key) => (`${spell.number} ${spell.unit}`))}
      <br />
      <b>Focus:</b> {spell.range.type}
      <br />
      <b>Range:</b> {rangeToString(spell.range)}
      <br />
      <b>Components:</b> {componentsToString(spell.components)}
      <br />
      <b>Duration:</b> {durationToString(spell.duration)}
    </div>
  );
}

export default memo(SpellHeaderInfo);
