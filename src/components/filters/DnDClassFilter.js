import React from "react";
import { InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import { Colors } from "../../assets/themes/Colors";
import { DnDClasses } from "../../util/DnDClasses";

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
        {DnDClasses.map((item, key) => (
          <MenuItem key={key} className={classes.options} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default DnDClassFilter;
