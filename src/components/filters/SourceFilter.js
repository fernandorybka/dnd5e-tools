import React from 'react';
import { Chip, FormControl, Input, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import { Colors } from "../../assets/themes/Colors";
import { Sources } from "../../util/Sources";

const useStyles = makeStyles((theme) => ({
    selectSources: {
        width: '450px',
        maxWidth: '90%'
    },
    blue: {
      color: Colors.pastelBlue,
      "& .MuiInputBase-root": {
        color: Colors.pastelBlue,
      },
    },
    options: {
        color: Colors.pastelBlack,
        background: Colors.pastelWhite
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 1,
        fontSize: '9px',
        background: Colors.pastelBlue
    },
  }));

function SourceFilter({ selectedFilters, handleInputChange }) {
    const classes = useStyles();

    const [personName, setPersonName] = React.useState([]);
    const [spellsSourcesSelected, setSpellsSourcesSelected] = React.useState([]);

    const spellsSources = Sources.filter(source => source.spells === "true");

    //setSpellsSourcesSelected(selectedFilters.spellsSources);

    const handleChange = (event) => {
        setSpellsSourcesSelected(event.target.value);
    };

    return (
        <FormControl className={classes.selectSources}>
            <InputLabel id="source-select-label" className={classes.blue}>Sources</InputLabel>
            <Select
            labelId="source-select-label"
            id="source-select"
            name="spellsSources"
            multiple
            value={selectedFilters.spellsSources}
            onChange={handleInputChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
                <div className={classes.chips}>
                {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                ))}
                </div>
            )}
            >
            {spellsSources.map((spellsSource, key) => (
                <MenuItem key={key} value={spellsSource.id} className={classes.options}>
                {spellsSource.name}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
    )
}


export default SourceFilter

