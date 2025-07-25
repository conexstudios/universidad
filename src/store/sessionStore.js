import create from 'zustand';

const useSessionStore = create((set) => ({
  session: null,
  setSession: (sessionData) => set({ session: sessionData }),
}));

export default useSessionStore;
