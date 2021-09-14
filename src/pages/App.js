import React, { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import CardList from "../components/cards/CardList";
import Filters from "../components/filters/Filters";
import theme from "../assets/themes/Theme";
import dnd5etoolsdb from "../services/dnd5etoolsdb";
import FiltersStorage from "../services/FiltersStorage";
import SingleModal from "../components/main/SingleModal";

import "../assets/css/DnD5eTools.css";

function App() {
  const [allSpells, setAllSpells] = useState([]);
  const [spellsByClass, setSpellsByClass] = useState([]);
  const [filters, setFilters] = useState(FiltersStorage.getFilters());
  

  useEffect(() => {
    const loadAll = async () => {
      let spellsRaw = allSpells;
      if (allSpells.length === 0) {
        spellsRaw = await dnd5etoolsdb.getAllSpells();
        setAllSpells(spellsRaw);
      }

      let filteredSpellsArray = dnd5etoolsdb.getSpellsByClass(
        spellsRaw,
        filters
      );
      setSpellsByClass(filteredSpellsArray);
    };

    loadAll();
  }, [filters, allSpells]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SingleModal />
      <Filters filters={filters} setFilters={setFilters} /> 
      <div style={{marginTop: '-200px'}}>
          {spellsByClass.map((spellsByLevel, key) => (
            <CardList
              key={key}
              type="spell"
              listName={`Level ${key}`}
              items={spellsByLevel}
            />
          ))}
      </div>
    </ThemeProvider>
  );
}

export default App;
