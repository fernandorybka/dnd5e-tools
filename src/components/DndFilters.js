import React, { useState } from "react";
import { Box, Button, FormControl, makeStyles } from "@material-ui/core";
import { Colors } from "../assets/themes/Colors";
import { DnDClasses } from "../util/DnDClasses"
import DnDClassFilter from "./filters/DnDClassFilter";
import SpellLevelFilter from "./filters/SpellLevelFilter";
import SourceFilter from "./filters/SourceFilter";

const useStyles = (props) =>
  makeStyles((theme) => ({
    featuredSection: {
      backgroundSize: "cover",
      backgroundPosition: "top",    
      backgroundImage: `url(${props.featuredImage})`,
      transition: 'ease all 0.5s'
    },
    featuredContainer: {
      height: "100vh",
      width: "100vw",
      background: `linear-gradient(90deg, ${Colors.pastelBlack} 30%, transparent 80%)`,
    },
    featuredContainerVertical: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: theme.spacing(8),
      paddingBottom: "200px",
      background: `linear-gradient(to top, ${Colors.pastelBlack} 10%, transparent 50%)`,
    },
    content: {
      maxWidth: "500px",
      fontSize: "14px",
    },
    labelSpells: {
      fontSize: "3rem",
      fontWeight: "bold",
      paddingTop: "14px",
      paddingLeft: "8px",
    },
    doFilter: {
        marginTop: theme.spacing(4),
        width: '200px'
    }
  }));

function DndFilters({ filters, setFilters }) {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const [featuredImage, setfeaturedImage] = useState(DnDClasses.filter(dndClass => dndClass.name === filters.dndClass)[0].featuredImg)

  const classes = useStyles({featuredImage: featuredImage})();

  const handleInputChange = (event) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLevelsChange = (event, newValue)  => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      spellLevels: newValue,
    }));
  };

  const handleClick = () => {
    setFilters(selectedFilters);
    setfeaturedImage(DnDClasses.filter(dndClass => dndClass.name === selectedFilters.dndClass)[0].featuredImg);
  }

  return (
    <section className={classes.featuredSection}>
      <Box className={classes.featuredContainer}>
        <Box className={classes.featuredContainerVertical}>
          <FormControl className={classes.formControl}>
            <div style={{ display: "flex" }}>
              <DnDClassFilter
                selectedFilters={selectedFilters}
                handleInputChange={handleInputChange}
              />
              <div className={classes.labelSpells}>Spells</div>
            </div>
            <SpellLevelFilter
              selectedFilters={selectedFilters}
              handleLevelsChange={handleLevelsChange}
            />
            <SourceFilter
              selectedFilters={selectedFilters}
              handleInputChange={handleInputChange}
            />
            <Button className={classes.doFilter} variant="contained" color={"primary"} onClick={handleClick}>
                Filter
            </Button>
          </FormControl>
        </Box>
      </Box>
    </section>
  );
}

DndFilters.propTypes = {};

export default DndFilters;
