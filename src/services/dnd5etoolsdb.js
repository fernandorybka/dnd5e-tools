//import allSpells from '../assets/jsons/spells/index.json';


const API_BASE = "https://5e.tools/data/spells/";
const JSON_SPELLS_ROOT = "../assets/jsons/spells/";

const basicFetch = async (endpoint) => {
    const request = await fetch(`${API_BASE}${endpoint}`);
    const json = await request.json();
    return json;
}

export default {
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
            // 'UA2020PsionicOptionsRevisited': require('../assets/jsons/spells/spells-ua-2020por.json'),
            // 'UA2020SpellsAndMagicTattoos': require('../assets/jsons/spells/spells-ua-2020smt.json'),
            // 'UA2021DraconicOptions': require('../assets/jsons/spells/spells-ua-2021do.json'),
            // 'UAArtificerRevisited': require('../assets/jsons/spells/spells-ua-ar.json'),
            // 'UAFighterRogueWizard': require('../assets/jsons/spells/spells-ua-frw.json'),
            //'UAModernMagic': require('../assets/jsons/spells/spells-ua-mm.json'),
            // 'UASorcererAndWarlock': require('../assets/jsons/spells/spells-ua-saw.json'),
            // 'UAStarterSpells': require('../assets/jsons/spells/spells-ua-ss.json'),
            // 'UAThatOldBlackMagic': require('../assets/jsons/spells/spells-ua-tobm.json'),
            'XGE': require('../assets/jsons/spells/spells-xge.json'),
            'PHB': require('../assets/jsons/spells/spells-phb.json'),
        };
            
        for (let [key, spellSource] of Object.entries(spellsDB)){
            spellsJson.spell = spellsJson.spell.concat(spellSource.spell);
        }

        return spellsJson;
    },
    getSpellsByClass: (spellsRaw, dndClass) => {
        let myClassSpells = spellsRaw.spell.filter(spell => spell.classes && spell.classes.fromClassList && spell.classes.fromClassList.some(item => item.name === dndClass));
        return [
            myClassSpells.filter(spell => spell.level === 0),
            myClassSpells.filter(spell => spell.level === 1),
            myClassSpells.filter(spell => spell.level === 2),
            myClassSpells.filter(spell => spell.level === 3),
            myClassSpells.filter(spell => spell.level === 4),
            myClassSpells.filter(spell => spell.level === 5),
            myClassSpells.filter(spell => spell.level === 6),
            myClassSpells.filter(spell => spell.level === 7),
            myClassSpells.filter(spell => spell.level === 8),
            myClassSpells.filter(spell => spell.level === 9)
        ]
    }
}