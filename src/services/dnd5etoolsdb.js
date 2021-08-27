const API_BASE = "https://5e.tools/data/spells/";

const basicFetch = async (endpoint) => {
    const request = await fetch(`${API_BASE}${endpoint}`);
    const json = await request.json();
    return json;
}

export default {
    getAllSpells: async () => {
        let json = basicFetch('/spells-phb.json?v=1.134.0');
        return json;
    },
    getSpellsByClass: (spellsRaw, dndClass) => {
        let myClassSpells = spellsRaw.spell.filter(spell => spell.classes.fromClassList.some(item => item.name === dndClass));
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