import React from "react";
import { Typography, makeStyles, Divider } from "@material-ui/core";
import { CardClasses } from "../CardProvider";
import SpellHeaderInfo from "./SpellHeaderInfo";
import NameAndSourceArray from "../main/NameAndSourceArray";
import Entry from "../main/Entry";

const useStyles = makeStyles((theme) =>
  Object.assign(CardClasses, {
    modalContainer: {
      margin: 0,
      padding: "10px",
    },
    spellHeader: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
    },
    bigDivider: {
      marginTop: "15px",
      marginBottom: "15px",
      border: "white solid 2px",
    },
  })
);

function SpellCardDetails({ spell }) {
  const classes = useStyles();

  return (
    <div
      className={`${classes.modalContainer} ${classes[`card${spell.school}`]}`}
    >
      <div className={classes.spellHeader}>
        <Typography variant="h5">{spell.name}</Typography>
        <Typography variant="h6">
          {spell.source} - {spell.page}
        </Typography>
      </div>
      <div className={classes.cardInfo}>
        <hr className={classes.smallDivider} />
        <SpellHeaderInfo spell={spell} />
        
        <hr className={classes.bigDivider} />
        {spell.entries.map((entry, key) => (
          <Entry entry={entry} key={key} />
        ))}

        {spell.entriesHigherLevel &&
          spell.entriesHigherLevel.map((entry, key) => (
            <Entry entry={entry} key={key} />
          ))}

        <NameAndSourceArray classesArray={spell.classes.fromClassList} title="Classes"/>
        <NameAndSourceArray classesArray={spell.classes.fromSubclass} title="Subclasses" />
        <NameAndSourceArray classesArray={spell.classes.fromClassListVariant} title="Optional/Variant" />
        <NameAndSourceArray classesArray={spell.races} title="Races" />
      </div>
    </div>
  );
}

export default SpellCardDetails;
