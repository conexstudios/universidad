import {create, persist} from "zustand";

const useSessionStore = create(
  persist(
    (set) => ({
      session: {},
      setSession: (data) => set({ session: data }),
      clearSession: () => set({ session: {} }),
    }),
    {
      name: "session-storage", 
      getStorage: () => localStorage,
    }
  )
);

export default useSessionStore;