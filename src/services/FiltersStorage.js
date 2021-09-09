import LocalStorageService from './LocalStorageService';

const FiltersStorage = {
    setFilters : async (filters) => {
      LocalStorageService.setItemJSON('filters', filters);
    },

    getFilters : () => (
      LocalStorageService.getItemJSON('filters') ??
      {
        dndClass: "Wizard",
        spellLevels: [0, 9],
        spellsSources: [
          "AI",
          "AitFR-AVT",
          "EGW",
          "GGR",
          "IDRotF",
          "LLK",
          "TCE",
          "XGE",
          "PHB",
        ],
      }
    )
}

export default FiltersStorage;