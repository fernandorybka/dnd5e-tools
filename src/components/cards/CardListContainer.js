import React, { Children, useState } from "react";
import { Container, Typography, makeStyles, Box } from "@material-ui/core";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Emitter from "../../services/Emitter";

import { Colors } from "../../assets/themes/Colors";

const useStyles = makeStyles((theme) => ({
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
      height: "280px",
      width: "70px",
      padding: 0,
      background: Colors.pastelBlack,
      opacity: "0",
      transform: "scale(0.9)",
      borderRadius: "8px",
      transition: "ease all 0.3s",
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        opacity: "0.8",
      },
    },
  }));

function CardListContainer({ children, type, listName }) {
  const classes = useStyles();
  const childrenLength = Children.toArray(children).length;
  
  const [scrollX, setScrollX] = useState(0);
  Emitter.on('NEW_FILTER_SIGNAL', () => setScrollX(0));

  const getListWidth = () =>
    childrenLength > 0 ? childrenLength * 226 + 60 : 0;

  const handleScrollLeft = () => {
    let x = scrollX + window.innerWidth / 2;
    setScrollX(x > 0 ? 0 : x);
  };

  const handleScrollRight = () => {
    let x = scrollX - window.innerWidth / 2;
    setScrollX(
      x > window.innerWidth - getListWidth() - 30
        ? x
        : window.innerWidth - getListWidth() - 30
    );
  };

  return (
    <div className={classes.listScroller}>
      <div>
        <Typography variant="h3" color="secondary" className={classes.listTitle}>
          {listName}
        </Typography>
        <Typography variant="body1" className={classes.listSubtitle}>
          ({childrenLength} {type}
          {childrenLength !== 1 ? "s" : ""})
        </Typography>
        
        <Container
          className={classes.listContainer}
          style={{
            width: getListWidth(),
            maxWidth: getListWidth(),
            marginLeft: scrollX,
          }}
        >
          {childrenLength > 0 && (
            <Box
              className={classes.scrollBox}
              onClick={handleScrollLeft}
              style={{ left: 0 }}
            >
              <ArrowLeft style={{ fontSize: 80 }} />
            </Box>
          )}

          {children}

          {childrenLength > 0 && (
            <Box
              className={classes.scrollBox}
              onClick={handleScrollRight}
              style={{ right: 0 }}
            >
              <ArrowRight style={{ fontSize: 80 }} />
            </Box>
          )}
        </Container>
      </div>
    </div>
  );
}

export default CardListContainer;
