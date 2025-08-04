import {create} from 'zustand';
import {persist} from 'zustand/middleware';

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

  bloodTypes: [],
  setBloodTypes: (bloodTypes) => set({ bloodTypes }),

  dominantSides: [],
  setDominantSides: (dominantSides) => set({ dominantSides }),

  physicalConditions: [],
  setPhysicalConditions: (physicalConditions) => set({ physicalConditions }),

 
  session: {
    location: {
      country: null,
      city: null,
      region: null,
      latitude: null,
      longitude: null,
      timestamp: null
    },
    device: {
      browser: null,
      os: null,
      deviceType: null,
      screenResolution: null,
      userAgent: null,
      language: null,
      timezone: null,
      timestamp: null
    },
    events: []
  },


  updateLocation: (locationData) => set(state => ({
    session: {
      ...state.session,
      location: {
        ...locationData,
        timestamp: new Date().toISOString()
      }
    }
  })),

  updateDeviceInfo: () => {
    const userAgent = window.navigator.userAgent;
    const screen = window.screen;
    
    const deviceInfo = {
      browser: detectBrowser(userAgent),
      os: detectOS(userAgent),
      deviceType: detectDeviceType(),
      screenResolution: `${screen.width}x${screen.height}`,
      userAgent: userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timestamp: new Date().toISOString()
    };

    set(state => ({
      session: {
        ...state.session,
        device: deviceInfo
      }
    }));

    return deviceInfo;
  },

  addEvent: (eventName, eventData = {}) => set(state => ({
    session: {
      ...state.session,
      events: [
        ...state.session.events,
        {
          id: Date.now(),
          name: eventName,
          data: eventData,
          timestamp: new Date().toISOString()
        }
      ].slice(-100)
    }
  })),

  clearSession: () => set({
    session: {
      location: {},
      device: {},
      events: []
    }
  })
}));






function detectDeviceType() {
  const userAgent = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) return 'Tablet';
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) return 'Mobile';
  return 'Desktop';
}

export default useCatalogStore;
