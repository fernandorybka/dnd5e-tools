import React, { memo } from "react";
import { makeStyles } from "@material-ui/core";
import { Colors } from "../../assets/themes/Colors";

import SpellCard from "../spells/SpellCard";

export const CardClasses = {
  cardC: {
    background: Colors.pastelBlue,
  },
  cardA: {
    background: Colors.pastelOrange,
  },
  cardN: {
    background: Colors.pastelYellow,
  },
  cardD: {
    background: Colors.pastelPurple,
  },
  cardV: {
    background: Colors.pastelPink,
  },
  cardI: {
    background: Colors.pastelLime,
  },
  cardT: {
    background: Colors.pastelRed,
  },
  smallDivider: {
    marginLeft: "10px",
    marginRight: "70%",
    marginTop: "-5px",
    marginBottom: "15px",
    border: "white solid 2px",
  },
  card: {
    height: "280px",
    width: "226px",
    cursor: "pointer",
    transition: "ease all 0.2s",
    transform: "scale(0.95)",
    borderRadius: 10,
    "&:hover": {
      transform: "scale(1)",
    },
  },
  cardTitle: {
    height: "5rem",
  },
  cardSubTitle: {
    color: "#000000",
    marginBottom: "8px",
    fontSize: "14px",
  },
  cardInfo: {
    paddingTop: "0px",
    paddingLeft: "8px",
    color: Colors.pastelBlack,
    width: "100%",
  },
  cardActions: {
    color: "white",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
  },
  bottom: {
    paddingBottom: "0px",
    marginBottom: "0px",
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "calc(100% - 6.5em)",
  },
};
const useStyles = makeStyles((theme) => CardClasses);

const cardByType = {
  spell: (item, classes) => {
    return <SpellCard item={item} classes={classes} />;
  },
};

function CardProvider({ type, item }) {
  const classes = useStyles();

  return cardByType[type](item, classes);
}

export default memo(CardProvider);
