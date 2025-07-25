import useSessionStore from './sessionStore';

/**
 * Hook para obtener una función fetch que incluye automáticamente los datos de sesión
 * en los headers o en el body según se requiera.
 * Uso:
 * const fetchWithSession = useFetchWithSession();
 * fetchWithSession(url, options)
 */
export function useFetchWithSession() {
  const session = useSessionStore((state) => state.session);

  /**
   * Realiza un fetch incluyendo los datos de sesión (user, id, token, etc) automáticamente
   * @param {string} url
   * @param {object} options
   * @param {boolean} [injectInBody=false] Si true, agrega la sesión al body JSON (POST/PUT)
   * @returns {Promise<Response>}
   */
  return async function fetchWithSession(url, options = {}, injectInBody = false) {
    if (!session) throw new Error('No hay sesión activa');
    const { user, id, token, ...rest } = session;
    let opts = { ...options };
    opts.headers = {
      ...(opts.headers || {}),
      'X-User': user,
      'X-Session-Id': id,
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    };
    if (injectInBody && opts.body) {
      try {
        const bodyObj = JSON.parse(opts.body);
        opts.body = JSON.stringify({ ...bodyObj, user, id, ...rest });
      } catch {
        // Si el body no es JSON, lo dejamos igual
      }
    }
    return fetch(url, opts);
  };
}
