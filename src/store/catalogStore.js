import {create} from 'zustand';

const useCatalogStore = create((set) => ({
  countries: [],
  setCountries: (countries) => set({ countries }),

  states: [],
  setStates: (states) => set({ states }),

  cities: [],
  setCities: (cities) => set({ cities }),

  municipalities: [],
  setMunicipalities: (municipalities) => set({ municipalities }),

  parishes: [],
  setParishes: (parishes) => set({ parishes }),
}));

export default useCatalogStore;
