import React from "react";
import { InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import { Colors } from "../../assets/themes/Colors";

const useStyles = makeStyles((theme) => ({
  dndClassTitle: {
    fontWeight: "bold",
    fontSize: "4rem",
  },
  blue: {
    color: Colors.pastelBlue,
    "& .MuiInputBase-root": {
      color: Colors.pastelBlue,
    },
  },
  options: {
      color: Colors.pastelBlack
  }
}));

const ALL_CLASSES = [
  "Artificer",
  "Barbarian",
  "Bard",
  "Druid",
  "Monk",
  "Cleric",
  "Fighter",
  "Mystic",
  "Paladin",
  "Ranger",
  "Rogue",
  "RuneScribe",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

function DnDClassFilter({ selectedFilters, handleInputChange }) {
  const classes = useStyles();

  return (
    <div>
      <InputLabel id="demo-simple-select-label" className={classes.blue}>
        Class
      </InputLabel>
      <Select
        name="dndClass"
        onChange={handleInputChange}
        labelId="demo-simple-select-label"
        value={selectedFilters.dndClass}
        className={classes.dndClassTitle}
      >
        {ALL_CLASSES.map((item, key) => (
          <MenuItem className={classes.options} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default DnDClassFilter;
