import React from "react";
import { Typography, makeStyles, Slider } from "@material-ui/core";
import { Colors } from "../../assets/themes/Colors";

const useStyles = makeStyles((theme) => ({
  dndClassTitle: {
    fontWeight: "bold",
    fontSize: "4rem",
  },
  blue: {
    color: Colors.pastelBlue,
  },
  spellLevelSlider: {
      paddingTop: theme.spacing(4),
      width: '300px',
      maxWidth: '90%',
      '& .MuiSlider-markLabel': {
        color: Colors.pastelBlue,
      }
  }



}));

const marks = [
  {
    value: 0,
    label: '0',
  },
  {value: 1},{value: 2},{value: 3},{value: 4},{value: 5},{value: 6},{value: 7},{value: 8},
  {
    value: 9,
    label: '9',
  }
];



function SpellLevelFilter({ selectedFilters, handleLevelsChange }) {
  const classes = useStyles();

  return (
    <div className={classes.spellLevelSlider}>
      <Typography id="level-label" className={classes.blue} >
        Spell Level
      </Typography>
      <Slider
        name="spellLevels"
        value={selectedFilters.spellLevels}
        onChange={handleLevelsChange}
        valueLabelDisplay="auto"
        aria-labelledby="level-label"
        step={1}
        min={0}
        max={9}
        marks={marks}
      />
    </div>
  );
}

export default SpellLevelFilter;
