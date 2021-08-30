import React, { Profiler, useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import CardList from "../components/CardList";
import FeaturedCard from "../components/FeaturedCard";
import theme from "../assets/themes/Theme";
import dnd5etoolsdb from "../services/dnd5etoolsdb";

import "../assets/css/DnD5eTools.css";
import SingleModal from "../components/SingleModal";

function App() {
  function onRenderCallback(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    console.log(`duracao: ${actualDuration}`);
  }

  const [spellsByClass, setSpellsByClass] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let spellsRaw = await dnd5etoolsdb.getAllSpells();
      let filteredSpellsArray = dnd5etoolsdb.getSpellsByClass(
        spellsRaw,
        "Druid"
      );
      setSpellsByClass(filteredSpellsArray);
    };

    loadAll();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SingleModal />
      {/* <FeaturedCard /> */}
      <div style={{marginTop: '0px'}}>
        <Profiler id="listas" onRender={onRenderCallback}>
          {spellsByClass.map((spellsByLevel, key) => (
            <CardList
              key={key}
              type="spell"
              listName={`Level ${key}`}
              items={spellsByLevel}
            />
          ))}
        </Profiler>
      </div>
    </ThemeProvider>
  );
}

export default App;
