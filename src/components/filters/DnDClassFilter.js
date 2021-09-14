import React, {memo} from "react";
import { FormControl, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import { Colors } from "../../assets/themes/Colors";
import { DnDClasses } from "../../util/DnDClasses";

const useStyles = makeStyles((theme) => ({
  dndClassTitle: {
    fontWeight: "bold",
    fontSize: "3rem",
    [theme.breakpoints.down('xs')]: {
      fontSize: "2.4rem",
    },
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
    <FormControl>
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
          item.spellCaster === 'true' &&
          <MenuItem key={key} className={classes.options} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default memo( DnDClassFilter );
