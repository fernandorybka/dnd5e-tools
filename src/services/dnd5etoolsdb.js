//import allSpells from '../assets/jsons/spells/index.json';


const API_BASE = "https://5e.tools/data/spells/";

const basicFetch = async (endpoint) => {
    const request = await fetch(`${API_BASE}${endpoint}`);
    const json = await request.json();
    return json;
}

const dnd5etoolsdb = {
    getSpellsFrom5ETools: () => {
        let json = basicFetch('/spells-phb.json?v=1.134.0');
        return json;
    },
    getAllSpells: () => { // local fetch - faster, safer, outdate
        let spellsJson = {"spell": []};
        let spellsDB = {
            'AI': require('../assets/jsons/spells/spells-ai.json'),
            'AitFR-AVT': require('../assets/jsons/spells/spells-aitfr-avt.json'),
            'EGW': require('../assets/jsons/spells/spells-egw.json'),
            'GGR': require('../assets/jsons/spells/spells-ggr.json'),
            'IDRotF': require('../assets/jsons/spells/spells-idrotf.json'),
            'LLK': require('../assets/jsons/spells/spells-llk.json'),
            'TCE': require('../assets/jsons/spells/spells-tce.json'),
            'XGE': require('../assets/jsons/spells/spells-xge.json'),
            'PHB': require('../assets/jsons/spells/spells-phb.json'),
        };
            
        for (let [, spellSource] of Object.entries(spellsDB)){
            spellsJson.spell = spellsJson.spell.concat(spellSource.spell);
        }

        return spellsJson;
    },
    getSpellsByClass: (spellsRaw, filters) => {
        // filter by DnD Class
        let mySpells = spellsRaw.spell.filter(spell => spell.classes && spell.classes.fromClassList && spell.classes.fromClassList.some(item => item.name === filters.dndClass));

        // filter by Source
        mySpells = mySpells.filter(spell => filters.spellsSources.includes(spell.source));
        
        let spellsByClass = [];
        
        // filter by Spell Level
        for (let i = filters.spellLevels[0]; i <= filters.spellLevels[1]; i++) {
            spellsByClass[i] = mySpells.filter(spell => spell.level === i);
        }


        return spellsByClass;
    }
}

export default dnd5etoolsdb;