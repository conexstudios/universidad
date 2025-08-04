import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSessionStore = create(
  persist(
    (set, get) => ({
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
        },
        
        preferenciasApariencia: {
          tema: 'sistema',
          colorPrimario: '#6a6ee0',
          densidad: 'estandar',
          tamanoFuente: 16,
          widgets: {
            calendario: true,
            tareasPendientes: true,
            proximasClases: true,
            noticias: true,
            eventos: true
          }
        },
       
        preferenciasAccesibilidad: {
          altoContraste: false,
          reducirMovimiento: false,
          textoAVoz: false,
          tamanoFuente: 100, 
          espaciadoTexto: 'normal',
          fuenteLegible: false,
          altoContrasteInputs: false,
          resaltarEnlaces: false
        },
        
        preferenciasAvanzadas: {
         
          modoOffline: false,
          sincronizacionAutomatica: true,
          frecuenciaSincronizacion: '15', 
          
         
          modoAhorroDatos: false,
          tamanoCache: 500, 
          
         
          modoDesarrollador: false,
          logsDepuracion: false,
          
          
          telemetria: true,
          anunciosPersonalizados: true,
          
        
          copiaSeguridadAutomatica: true,
          frecuenciaCopiaSeguridad: 'diaria',
          
      
          endpointPersonalizado: '',
          tiempoEsperaAPI: 30 
        }
      },
      
    
      setSession: (data) => set({ session: data }),
      
  
      updateUserPreferences: (updates) => set(state => ({
        userPreferences: {
          ...state.userPreferences,
          ...updates
        }
      })),
      
      
      updateContactInfo: (contactInfo) => set(state => ({
        userPreferences: {
          ...state.userPreferences,
          contactInfo: {
            ...state.userPreferences.contactInfo,
            ...contactInfo
          }
        }
      })),
      
      
      updateNotificationPreferences: (notifications) => set(state => ({
        userPreferences: {
          ...state.userPreferences,
          notifications: {
            ...state.userPreferences.notifications,
            ...notifications
          }
        }
      })),
      
    
      updatePrivacySettings: (privacy) => set(state => ({
        userPreferences: {
          ...state.userPreferences,
          privacy: {
            ...state.userPreferences.privacy,
            ...privacy
          }
        }
      })),
      
      
      updateAppearancePreferences: (preferencias) => set(state => ({
        userPreferences: {
          ...state.userPreferences,
          preferenciasApariencia: {
            ...state.userPreferences.preferenciasApariencia,
            ...preferencias
          }
        }
      })),
      
      
      updateAccessibilityPreferences: (preferencias) => set(state => ({
        userPreferences: {
          ...state.userPreferences,
          preferenciasAccesibilidad: {
            ...state.userPreferences.preferenciasAccesibilidad,
            ...preferencias
          }
        }
      })),
      
    
      updateAdvancedPreferences: (preferencias) => set(state => ({
        userPreferences: {
          ...state.userPreferences,
          preferenciasAvanzadas: {
            ...state.userPreferences.preferenciasAvanzadas,
            ...preferencias
          }
        }
      })),

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
          },
          preferenciasApariencia: {
            tema: 'sistema',
            colorPrimario: '#6a6ee0',
            densidad: 'estandar',
            tamanoFuente: 16,
            widgets: {
              calendario: true,
              tareasPendientes: true,
              proximasClases: true,
              noticias: true,
              eventos: true
            }
          },
          preferenciasAccesibilidad: {
            altoContraste: false,
            reducirMovimiento: false,
            textoAVoz: false,
            tamanoFuente: 100,
            espaciadoTexto: 'normal',
            fuenteLegible: false,
            altoContrasteInputs: false,
            resaltarEnlaces: false
          },
          preferenciasAvanzadas: {
            modoOffline: false,
            sincronizacionAutomatica: true,
            frecuenciaSincronizacion: '15',
            modoAhorroDatos: false,
            tamanoCache: 500,
            modoDesarrollador: false,
            logsDepuracion: false,
            telemetria: true,
            anunciosPersonalizados: true,
            copiaSeguridadAutomatica: true,
            frecuenciaCopiaSeguridad: 'diaria',
            endpointPersonalizado: '',
            tiempoEsperaAPI: 30
          }
        }
      })
    }),
    {
      name: "session-storage",
      getStorage: () => sessionStorage,
      partialize: (state) => ({
        session: state.session,
        userPreferences: state.userPreferences
      })
    }
  )
);

export default useSessionStore;