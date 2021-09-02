import React from "react";
import { Typography, makeStyles, Divider } from "@material-ui/core";
import { CardClasses } from "../CardProvider";
import SpellHeaderInfo from "./SpellHeaderInfo";
import NameAndSourceArray from "../main/NameAndSourceArray";
import Entry from "../main/Entry";
import Emitter from "../../services/Emitter";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { Colors } from "../../assets/themes/Colors";

const useStyles = makeStyles((theme) =>
  Object.assign(CardClasses, {
    modalContainer: {
      margin: 0,
      padding: "30px",
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

    arrow: {
      width:'30px',
      margin: '20px',
      height:"calc(100% - 40px)", 
      position:"absolute", 
      top: "0", 
      justifyContent: "center", 
      alignItems: "center", 
      display: "flex", 
      opacity: "1",
      color: Colors.pastelWhite,
      cursor:"pointer",
      overflow: "hidden"
    }
  })
);

function SpellCardDetails({ spell }) {
  const classes = useStyles();

  const openNext = () => {
    if (spell.next) {
      Emitter.emit('OPEN_MODAL_SIGNAL', {customClass: `card${spell.next.school}`, content: <SpellCardDetails spell={spell.next} />});
    }
  };

  const openPrev = () => {
    if (spell.prev) {
      Emitter.emit('OPEN_MODAL_SIGNAL', {customClass: `card${spell.prev.school}`, content: <SpellCardDetails spell={spell.prev} />});
    }
  };
  
  return (
    <div className={`${classes.modalContainer} ${classes[`card${spell.school}`]}`}>
      <div style={{left:"0"}} className={classes.arrow} onClick={openPrev} >
        <ArrowLeft style={{ fontSize: 60 }} />
      </div>
      <div style={{right:"0"}} className={classes.arrow} onClick={openNext} >
        <ArrowRight style={{ fontSize: 60 }} />
      </div>
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
