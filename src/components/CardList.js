import React, { useState } from "react";
import { Container, Typography, makeStyles, Box } from "@material-ui/core";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";

import { Colors, CardClasses } from "../assets/themes/Colors";

import SpellCard from "./spells/SpellCard";

const useStyles = makeStyles((theme) => (Object.assign(CardClasses,
  {
  listScroller: {
    width: "100%",
    overflowX: "hidden",
  },
  listContainer: {
    display: "flex",
    padding: "30px",
    paddingTop: "0px",
    margin: "0",
    transition: "ease all 0.5s",
    "&:hover": {
      "& $scrollBox": {
        opacity: "0.7",
      },
    },
  },
  listTitle: {
    padding: "0px 0 0 30px",
    fontFamily: "Teko",
  },
  listSubtitle: {
    padding: "0 0 0 30px",
    color: Colors.pastelBrown,
  },
  scrollBox: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    color: "primary",
    zIndex: "99",
    height: "320px",
    width: "70px",
    padding: 0,
    background:  Colors.pastelBlack,
    opacity: "0",
    transform: "scale(0.9)",
    borderRadius: "8px",
    transition: "ease all 0.3s",
    cursor: "pointer",
  },
  card: {
    height: "320px",
    width: "230px",
    cursor: "pointer",
    transition: "ease all 0.2s",
    transform: "scale(0.95)",
    borderRadius: 10,
    "&:hover": {
      transform: "scale(1)",
    },
  },
  cardTitle: {
    //background: Colors.pastelBlue,
    //marginBottom: theme.spacing(1)
    height: "5rem",
  },
  cardSubTitle: {
    color: "#000000",
    marginBottom: theme.spacing(1),
    fontSize: "14px",
  },
  cardInfo: {
    paddingTop: "0px",
    paddingLeft: theme.spacing(1),
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
})));

function CardList({ listName, items }) {
  const classes = useStyles();
  const [scrollX, setScrollX] = useState(0);

  const getListWidth = () => ( items ? items.length * 230 + 60 : 0);

  const handleScrollLeft = () => {
    let x = scrollX + window.innerWidth / 2;
    setScrollX(x > 0 ? 0 : x);
  };

  const handleScrollRight = () => {
    let x = scrollX - window.innerWidth / 2;    
    setScrollX(x > window.innerWidth-getListWidth()-30 ? x : window.innerWidth-getListWidth()-30);
  };

  return (
    <div className={classes.listScroller}>
      <div>
        <Typography
          variant="h3"
          color="secondary"
          className={classes.listTitle}
        >
          {listName}
        </Typography>
        <Typography variant="body1" className={classes.listSubtitle}>
          ({items.length} spell{items.length !== 1 ? "s" : ""})
        </Typography>
        <Container
          className={classes.listContainer}
          style={{
            width: getListWidth(),
            maxWidth: getListWidth(),
            marginLeft: scrollX,
          }}
        >
          <Box
            className={classes.scrollBox}
            onClick={handleScrollLeft}
            style={{ left: 0 }}
          >
            <ArrowLeft style={{ fontSize: 80 }} />
          </Box>

          {items.map((item, key) => (
            <SpellCard key={key} item={item} classes={classes} />
          ))}

          <Box
            className={classes.scrollBox}
            onClick={handleScrollRight}
            style={{ right: 0 }}
          >
            <ArrowRight style={{ fontSize: 80 }} />
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default CardList;
