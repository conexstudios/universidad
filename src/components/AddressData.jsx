import React from 'react';
import '../styles/AddressData.css';
import { useState, useEffect } from 'react';
import useSessionStore from '../store/sessionStore';
import useCatalogStore from '../store/catalogStore';

const AddressData = () => {

  const session = useSessionStore((state) => state.session);
  const [addressData, setAddressData] = useState({
    paisHabitacion: '',
    estadoHabitacion: '',
    municipioHabitacion: '',
    parroquiaHabitacion: '',
    direccionPrincipal: '',
    urbanizacion: '',
    sector: '',
    otraDireccion: '',
    telefono1: '',
    telefono2: '',
  });

  const countries = useCatalogStore((state) => state.countries);
  const setCountries = useCatalogStore((state) => state.setCountries);
  const states = useCatalogStore((state) => state.states);
  const setStates = useCatalogStore((state) => state.setStates);
  const cities = useCatalogStore((state) => state.cities);
  const setCities = useCatalogStore((state) => state.setCities);
  const municipalities = useCatalogStore((state) => state.municipalities);
  const setMunicipalities = useCatalogStore((state) => state.setMunicipalities);
  const parishes = useCatalogStore((state) => state.parishes);
  const setParishes = useCatalogStore((state) => state.setParishes);

  const [selectedState, setSelectedState] = useState(states);
  const [selectedCity, setSelectedCity] = useState(cities);
  const [selectedMunicipality, setSelectedMunicipality] = useState(municipalities);
  const [selectedParish, setSelectedParish] = useState(parishes);

  const fetchAddressData = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/nominas?NOM_FICHANRO=' + session.NOM_FICHANRO);
      const data = await response.json()
      setAddressData(data);
    } catch (error) {
      console.error('Error fetching address data:', error);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/paises');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };
  
  const fetchStates = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/estados');
      const data = await response.json();
      setStates(data); 
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  const fetchCities = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/ciudades');
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const fetchMunicipalities = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/municipios');
      const data = await response.json();
      setMunicipalities(data); 
    } catch (error) {
      console.error('Error fetching municipalities:', error);
    }
  };

  const fetchParishes = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/parroquias');
      const data = await response.json();
      setParishes(data);
    } catch (error) {
      console.error('Error fetching parishes:', error);
    }
  };

  useEffect(() => {
    fetchAddressData();
    if (countries.length === 0) fetchCountries();
    if (states.length === 0) fetchStates();
    if (cities.length === 0) fetchCities();
    if (municipalities.length === 0) fetchMunicipalities();
    if (parishes.length === 0) fetchParishes();
  }, []);

  const filterByCountry = (countryId) => {
    const filteredStates = states.filter((state) => state.PAIS_ID == countryId);
    setSelectedState(filteredStates);
    setSelectedCity([]);
    setSelectedMunicipality([]);
    setSelectedParish([]);
  };

  const filterByState = (stateId) => {
    const filteredCities = cities.filter((city) => city.ESTADO_ID == stateId);
    setSelectedCity(filteredCities);

    const filteredMunicipalities = municipalities.filter((municipality) => municipality.ESTADO_ID == stateId);
    setSelectedMunicipality(filteredMunicipalities);
  };

  const filterByCity = (cityId) => {
    const filteredMunicipalities = municipalities.filter((municipality) => municipality.CIUDAD_ID == cityId);
    setSelectedMunicipality(filteredMunicipalities);
  };

  const filterByMunicipality = (municipalityId) => {
    const filteredParishes = parishes.filter((parish) => parish.MUNICIPIO_ID == municipalityId);
    setSelectedParish(filteredParishes);
  };

  return (
    <form>
      <div className="form-section">
        <h2>Dirección de Habitación</h2>
        <div className="form-group">
          <label htmlFor="pais-habitacion">País</label>
          <select id="pais-habitacion" name="pais-habitacion" onChange={(e) => filterByCountry(e.target.value)}>
            <option value="">Seleccione</option>
            {countries.map((country) => (
              <option key={country.PAIS_ID} value={country.PAIS_ID}>
                {country.PAIS_NOMBRE}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="estado-habitacion">Estado</label>
          <select id="estado-habitacion" name="estado-habitacion" onChange={(e) => filterByState(e.target.value)}>
            <option value="">Seleccione</option>
            {selectedState.map((state) => (
              <option key={state.ESTADO_ID} value={state.ESTADO_ID}>
                {state.EST_NOMBRE}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="municipio-habitacion">Municipio</label>
          <select id="municipio-habitacion" name="municipio-habitacion" onChange={(e) => filterByMunicipality(e.target.value)}>
            <option value="">Seleccione</option>
            {selectedMunicipality.map((municipality) => (
              <option key={municipality.MUNICIPIO_ID} value={municipality.MUNICIPIO_ID}>
                {municipality.MUN_NOMBRE}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="parroquia-habitacion">Parroquia</label>
          <select id="parroquia-habitacion" name="parroquia-habitacion" onChange={e => setAddressData({ ...addressData, parroquiaHabitacion: e.target.value })}>
            <option value="">Seleccione</option>
            {selectedParish.map((parish) => (
              <option key={parish.PARROQUIA_ID} value={parish.PARROQUIA_ID}>
                {parish.PARROQ_NOMBRE}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="direccion-principal">Dirección Principal</label>
          <input type="text" id="direccion-principal" name="direccion-principal" value={addressData.direccion_principal} onChange={(e) => setAddressData({ ...addressData, direccionPrincipal: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="urbanizacion">Urbanización</label>
          <input type="text" id="urbanizacion" name="urbanizacion" value={addressData.urbanizacion} onChange={(e) => setAddressData({ ...addressData, urbanizacion: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="sector">Sector</label>
          <input type="text" id="sector" name="sector" value={addressData.sector} onChange={(e) => setAddressData({ ...addressData, sector: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="otra-direccion">Otra Dirección</label>
          <input type="text" id="otra-direccion" name="otra-direccion" value={addressData.otraDireccion} onChange={(e) => setAddressData({ ...addressData, otraDireccion: e.target.value })} />
        </div>
      </div>

      <div className="form-section">
        <h2>Teléfonos:</h2>
        <div className="form-group">
          <input type="text" id="telefono1" name="telefono1" value={addressData.telefono1} onChange={(e) => setAddressData({ ...addressData, telefono1: e.target.value })} />
        </div>
        <div className="form-group">
          <input type="text" id="telefono2" name="telefono2" value={addressData.telefono2} onChange={(e) => setAddressData({ ...addressData, telefono2: e.target.value })} />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="save-button">Guardar Cambios</button>
        <button type="button" className="cancel-button">Cancelar</button>
      </div>
    </form>
  );
};

export default AddressData;
