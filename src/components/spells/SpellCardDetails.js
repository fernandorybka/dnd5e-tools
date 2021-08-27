import React from "react";
import { Typography, makeStyles, Divider } from "@material-ui/core";
import { CardClasses } from "../../assets/themes/Colors";
import SpellHeaderInfo from "./SpellHeaderInfo";
import NameAndSourceArray from "../main/NameAndSourceArray";
import Entry from "../main/Entry"

const useStyles = makeStyles((theme) =>
  Object.assign(CardClasses, {
    modalContainer: {
      margin: 0,
      padding: '10px',
    },
    spellHeader: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: '10px'
    },
    bigDivider: {
      marginTop: "15px",
      marginBottom: "15px",
      border: "white solid 2px",
    },
  })
);
//TODO: Entry element
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
      <hr className={classes.smallDivider} />
      <SpellHeaderInfo spell={spell} />
      <hr className={classes.bigDivider}/>
      {spell.entries.map( (entry, key) => (
          <Entry entry={entry} key={key}/>
      ))}
      {spell.entriesHigherLevel && spell.entriesHigherLevel.map( (entry, key) => (
          <Entry entry={entry} key={key}/>
      ))}

          <NameAndSourceArray classesArray={spell.classes.fromClassList} title="Classes" />    
          <NameAndSourceArray classesArray={spell.classes.fromSubclass} title="Subclasses"/>
          <NameAndSourceArray classesArray={spell.classes.fromClassListVariant} title="Optional/Variant"/> 

          <NameAndSourceArray classesArray={spell.races} title="Races"/> 
   </div>

    // name: "Blade Ward",
    // source: "PHB",
    // page: 218,
    // level: 0,
    // school: "A",
    // time: [{ number: 1, unit: "action" }],
    // range: { type: "point", distance: { type: "self" } },
    // components: { v: true, s: true },
    // duration: [{ type: "timed", duration: { type: "round", amount: 1 } }],
    // entries: [
    //   "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.",
    // ],
    // damageResist: ["bludgeoning", "piercing", "slashing"],
    // "classes": {
  //     "fromClassList": [
  //       { "name": "Cleric", "source": "PHB" },
  //       { "name": "Paladin", "source": "PHB" },
  //       { "name": "Artificer", "source": "UAArtificer" },
  //       { "name": "Artificer (Revisited)", "source": "UAArtificerRevisited" },
  //       { "name": "Artificer", "source": "TCE" }
  //     ],
  //     "fromSubclass": [
  //       {
  //         "class": { "name": "Cleric", "source": "PHB" },
  //         "subclass": {
  //           "name": "Protection (UA)",
  //           "source": "UAClericDivineDomains"
  //         }
  //       },
  //       {
  //         "class": { "name": "Cleric", "source": "PHB" },
  //         "subclass": { "name": "Solidarity (PSA)", "source": "PSA" }
  //       },
  //       {
  //         "class": { "name": "Cleric", "source": "PHB" },
  //         "subclass": {
  //           "name": "Unity (UA)",
  //           "source": "UA2020SubclassesPt2"
  //         }
  //       },
  //       {
  //         "class": { "name": "Cleric", "source": "PHB" },
  //         "subclass": { "name": "Peace", "source": "TCE" }
  //       },
  //       {
  //         "class": { "name": "Sorcerer", "source": "PHB" },
  //         "subclass": { "name": "Clockwork Soul", "source": "TCE" }
  //       }
  //     ],
  //     "fromClassListVariant": [
  //       {
  //         "name": "Bard",
  //         "source": "PHB",
  //         "definedInSource": "UAClassFeatureVariants"
  //       },
  //       {
  //         "name": "Ranger",
  //         "source": "PHB",
  //         "definedInSource": "UAClassFeatureVariants"
  //       },
  //       { "name": "Bard", "source": "PHB", "definedInSource": "TCE" },
  //       { "name": "Ranger", "source": "PHB", "definedInSource": "TCE" }
  //     ]
  //   },
  //   "races": [
  //     {
  //       "name": "Halfling (Mark of Hospitality)",
  //       "source": "ERLW",
  //       "baseName": "Halfling",
  //       "baseSource": "PHB"
  //     }
  //   ],
  //   "backgrounds": [
  //     { "name": "Boros Legionnaire", "source": "GGR" },
  //     { "name": "Selesnya Initiate", "source": "GGR" }
  //   ]
  // },
  );
}

export default SpellCardDetails;
