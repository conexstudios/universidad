import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSessionStore = create(
  persist(
    (set, get) => ({
      session: {},
      userPreferences: {
        // Información de contacto
        contactInfo: {
          personalEmail: '',
          phone: '',
          address: '',
          emergencyContactName: '',
          emergencyContactPhone: ''
        },
        // Preferencias de notificación
        notifications: {
          email: true,
          push: true,
          sms: false
        },
        // Configuración de privacidad
        privacy: {
          showEmail: true,
          showPhone: true,
          showLocation: false
        }
      },
      
      // Actualizar la sesión completa
      setSession: (data) => set({ session: data }),
      
      // Actualizar preferencias de usuario
      updateUserPreferences: (updates) => set(state => ({
        userPreferences: {
          ...state.userPreferences,
          ...updates
        }
      })),
      
      // Actualizar información de contacto
      updateContactInfo: (contactInfo) => set(state => ({
        userPreferences: {
          ...state.userPreferences,
          contactInfo: {
            ...state.userPreferences.contactInfo,
            ...contactInfo
          }
        }
      })),
      
      // Actualizar preferencias de notificación
      updateNotificationPreferences: (notifications) => set(state => ({
        userPreferences: {
          ...state.userPreferences,
          notifications: {
            ...state.userPreferences.notifications,
            ...notifications
          }
        }
      })),
      
      // Actualizar configuración de privacidad
      updatePrivacySettings: (privacy) => set(state => ({
        userPreferences: {
          ...state.userPreferences,
          privacy: {
            ...state.userPreferences.privacy,
            ...privacy
          }
        }
      })),
      
      // Limpiar sesión
      clearSession: () => set({ 
        session: {},
        userPreferences: {
          contactInfo: {
            personalEmail: '',
            phone: '',
            address: '',
            emergencyContactName: '',
            emergencyContactPhone: ''
          },
          notifications: {
            email: true,
            push: true,
            sms: false
          },
          privacy: {
            showEmail: true,
            showPhone: true,
            showLocation: false
          }
        }
      }),
    }),
    {
      name: "session-storage",
      getStorage: () => localStorage,
      partialize: (state) => ({ 
        session: state.session,
        userPreferences: state.userPreferences 
      })
    }
  )
);

export default useSessionStore;