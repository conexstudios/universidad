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

 
  preferences: {
    visibleCategories: {
      academic: true,
      events: true,
      tasks: true,
      announcements: true,
      calendar: true,
      messages: true,
      grades: true,
      attendance: true
    },
    
    calendarView: 'Semana',
    timeFormat: '12 horas (AM/PM)',
    firstDayOfWeek: 'Lunes',
    showCompletedTasks: true,
    taskReminders: true,
    showCourseProgress: true
  },
  
  updatePreferences: (updates) => set(state => ({
    preferences: {
      ...state.preferences,
      ...updates
    }
  })),
  
  setVisibleCategories: (categoryUpdates) => set(state => ({
    preferences: {
      ...state.preferences,
      visibleCategories: {
        ...state.preferences.visibleCategories,
        ...categoryUpdates
      }
    }
  })),
  
  clearSession: () => set({
    session: {
      location: {},
      device: {},
      events: []
    },
    visibleCategories: {
      academic: true,
      events: true,
      tasks: true,
      announcements: true,
      calendar: true,
      messages: true,
      grades: true,
      attendance: true
    }
  })
}));

export default useCatalogStore;
