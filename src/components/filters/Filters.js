import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Colors } from "../../assets/themes/Colors";
import { DnDClasses } from "../../util/DnDClasses";
import FiltersForm from "./FiltersForm";
import DnDClassFilter from "./DnDClassFilter";
import SpellLevelFilter from "./SpellLevelFilter";
import SourceFilter from "./SourceFilter";
import Emitter from "../../services/Emitter";
import FiltersStorage from "../../services/FiltersStorage";

const useStyles = (props) =>
  makeStyles((theme) => ({
    featuredSection: {
      backgroundSize: "cover",
      backgroundPosition: "top",
      backgroundImage: `url(${props.featuredImage})`,
      transition: "ease all 0.5s",
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
      [theme.breakpoints.down("xs")]: {
        paddingLeft: theme.spacing(2),
      },
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
      [theme.breakpoints.down("xs")]: {
        paddingTop: "20px",
        fontSize: "2.4rem",
      },
    },
  }));

function Filters({ filters, setFilters }) {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const [featuredImage, setFeaturedImage] = useState(
    DnDClasses.filter((dndClass) => dndClass.name === filters.dndClass)[0]
      .featuredImg
  );

  const classes = useStyles({ featuredImage: featuredImage })();

  useEffect(() => {
    const handleFilterCommited = () => {
      FiltersStorage.setFilters(selectedFilters);
      setFilters(selectedFilters);
      setFeaturedImage(
        DnDClasses.filter(
          (dndClass) => dndClass.name === selectedFilters.dndClass
        )[0].featuredImg
      );
      Emitter.emit("NEW_FILTER_SIGNAL");
    };

    handleFilterCommited();
  }, [selectedFilters, setFilters, setFeaturedImage]);

  const handleInputChange = (event) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLevelsChange = (event, newValue) => {
    if (
      selectedFilters.spellLevels[0] !== newValue[0] ||
      selectedFilters.spellLevels[1] !== newValue[1]
    ) {
      setSelectedFilters((prevState) => ({
        ...prevState,
        spellLevels: newValue,
      }));
    }
  };

  return (
    <FiltersForm classes={classes}>
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
    </FiltersForm>
  );
}

export default Filters;
