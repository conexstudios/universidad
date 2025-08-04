import React, { useState, useEffect, useCallback } from 'react';
import { format, parse, isBefore, isToday, isTomorrow, isAfter } from 'date-fns';
import { es } from 'date-fns/locale';
import "../styles/TareasData.css";
import useSessionStore from '../store/sessionStore';
import useCatalogStore from '../store/catalogStore';
import { useFetchWithSession } from '../store/fetchWithSession';

const TareasData = () => {
const fetchWithSession = useFetchWithSession();
  const { session } = useSessionStore();
  const { catalog } = useCatalogStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tareas, setTareas] = useState([]);
  const [filter, setFilter] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    subject: '',
    task: '',
    dueDate: format(new Date(), 'yyyy-MM-dd'),
    status: 'pendiente',
    priority: 'media',
    description: ''
  });


  const [filters, setFilters] = useState({
    status: 'todas',
    subject: 'todas',
    priority: 'todas',
    dateRange: 'todas'
  });

  const materias = [...new Set(tareas.map(tarea => tarea.subject))];

  
  const formatDisplayDate = (dateStr) => {
    const date = parse(dateStr, 'dd/MM/yyyy', new Date());
    if (isToday(date)) return 'Hoy';
    if (isTomorrow(date)) return 'Mañana';
    return format(date, "EEEE d 'de' MMMM", { locale: es });
  };

 
  const getTareasByDate = useCallback(() => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    return tareas.filter(tarea => {
      const fechaTarea = parse(tarea.dueDate, 'dd/MM/yyyy', new Date());
    
      if (filters.status !== 'todas' && tarea.status !== filters.status) return false;
      if (filters.subject !== 'todas' && tarea.subject !== filters.subject) return false;
      if (filters.priority !== 'todas' && tarea.priority !== filters.priority) return false;
      
      
      if (filters.dateRange !== 'todas') {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        
        switch(filters.dateRange) {
          case 'hoy':
            if (!isToday(fechaTarea)) return false;
            break;
          case 'proximos7dias':
            const en7Dias = new Date();
            en7Dias.setDate(hoy.getDate() + 7);
            if (isBefore(fechaTarea, hoy) || isAfter(fechaTarea, en7Dias)) return false;
            break;
          case 'vencidas':
            if (!isBefore(fechaTarea, hoy)) return false;
            break;
          default:
            break;
        }
      }
      
      
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          tarea.task.toLowerCase().includes(searchLower) ||
          tarea.subject.toLowerCase().includes(searchLower) ||
          tarea.description?.toLowerCase().includes(searchLower)
        );
      }
      
      return true;
    }).sort((a, b) => {
      const dateA = parse(a.dueDate, 'dd/MM/yyyy', new Date());
      const dateB = parse(b.dueDate, 'dd/MM/yyyy', new Date());
      return dateA - dateB;
    });
  }, [tareas, filters, searchTerm]);

 
  const fetchTareas = useCallback(async () => {
    if (!session?.user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      setTimeout(() => {
        const mockTareas = [
          { id: 1, subject: "Matemáticas", task: "Guía de ejercicios 3.1", dueDate: format(new Date(), 'dd/MM/yyyy'), status: "pendiente", priority: 'alta' },
          { id: 2, subject: "Física", task: "Pre-informe de laboratorio N°2", dueDate: format(new Date(Date.now() + 86400000 * 2), 'dd/MM/yyyy'), status: "pendiente", priority: 'media' },
          { id: 3, subject: "Español", task: "Análisis literario: 'La Vorágine'", dueDate: format(new Date(Date.now() + 86400000 * 5), 'dd/MM/yyyy'), status: "completada", priority: 'baja' },
        ];
        setTareas(mockTareas);
        setLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error al cargar tareas:', error);
      setError('No se pudieron cargar las tareas. Intente de nuevo más tarde.');
      setLoading(false);
    }
  }, [session]);

 
  const handleSaveTarea = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      
      if (editingId) {
        setTareas(tareas.map(t => 
          t.id === editingId ? { ...formData, id: editingId } : t
        ));
      } else {
        const newTarea = {
          ...formData,
          id: Date.now(), 
        };
        setTareas([...tareas, newTarea]);
      }
      
      
      setFormData({
        subject: '',
        task: '',
        dueDate: format(new Date(), 'yyyy-MM-dd'),
        status: 'pendiente',
        priority: 'media',
        description: ''
      });
      
      setShowForm(false);
      setEditingId(null);
      
    } catch (error) {
      console.error('Error al guardar la tarea:', error);
      setError('No se pudo guardar la tarea. Intente de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  
  const handleDeleteTarea = async (id) => {
    if (!window.confirm('¿Está seguro de eliminar esta tarea?')) return;
    
    try {
      setLoading(true);
      setTareas(tareas.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
      setError('No se pudo eliminar la tarea. Intente de nuevo.');
    } finally {
      setLoading(false);
    }
  };

 
  const handleEditTarea = (tarea) => {
    setFormData({
      subject: tarea.subject,
      task: tarea.task,
      dueDate: parse(tarea.dueDate, 'dd/MM/yyyy', new Date()).toISOString().split('T')[0],
      status: tarea.status,
      priority: tarea.priority || 'media',
      description: tarea.description || ''
    });
    setEditingId(tarea.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  useEffect(() => {
    fetchTareas();
  }, [fetchTrades]);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const getStatusClass = (status) => {
    return status.toLowerCase().replace(/\s+/g, '-');
  };

 
  const getPriorityClass = (priority) => {
    return `priority-${priority || 'media'}`;
  };

  
  const tareasFiltradas = getTareasByDate();

  if (loading && tareas.length === 0) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando tareas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button 
          className="retry-button"
          onClick={fetchTareas}
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="tareas-container">
      <div className="tareas-header">
        <h2>Gestión de Tareas</h2>
        <button 
          className="add-button"
          onClick={() => {
            setShowForm(!showForm);
            if (showForm) setEditingId(null);
          }}
        >
          {showForm ? 'Cancelar' : 'Nueva Tarea'}
        </button>
      </div>

      
      {showForm && (
        <form className="tarea-form" onSubmit={handleSaveTarea}>
          <h3>{editingId ? 'Editar Tarea' : 'Nueva Tarea'}</h3>
          
          <div className="form-group">
            <label>Materia *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="Ej: Matemáticas"
            />
          </div>
          
          <div className="form-group">
            <label>Título de la tarea *</label>
            <input
              type="text"
              name="task"
              value={formData.task}
              onChange={handleInputChange}
              required
              placeholder="Ej: Ejercicios de álgebra"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Fecha de entrega *</label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleInputChange}
                required
                min={format(new Date(), 'yyyy-MM-dd')}
              />
            </div>
            
            <div className="form-group">
              <label>Estado *</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
              >
                <option value="pendiente">Pendiente</option>
                <option value="en-progreso">En progreso</option>
                <option value="completada">Completada</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Prioridad *</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                required
              >
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label>Descripción</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              placeholder="Detalles adicionales sobre la tarea..."
            ></textarea>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="save-button">
              {loading ? 'Guardando...' : 'Guardar Tarea'}
            </button>
            <button 
              type="button" 
              className="cancel-button"
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

    
      <div className="filters-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar tareas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="search-icon">🔍</i>
        </div>
        
        <div className="filter-group">
          <label>Filtrar por:</label>
          <select 
            name="status" 
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="todas">Todas las tareas</option>
            <option value="pendiente">Pendientes</option>
            <option value="en-progreso">En progreso</option>
            <option value="completada">Completadas</option>
          </select>
          
          <select 
            name="priority"
            value={filters.priority}
            onChange={handleFilterChange}
          >
            <option value="todas">Todas las prioridades</option>
            <option value="alta">Alta prioridad</option>
            <option value="media">Media prioridad</option>
            <option value="baja">Baja prioridad</option>
          </select>
          
          <select 
            name="dateRange"
            value={filters.dateRange}
            onChange={handleFilterChange}
          >
            <option value="todas">Todas las fechas</option>
            <option value="hoy">Hoy</option>
            <option value="proximos7dias">Próximos 7 días</option>
            <option value="vencidas">Vencidas</option>
          </select>
          
          {materias.length > 0 && (
            <select 
              name="subject"
              value={filters.subject}
              onChange={handleFilterChange}
            >
              <option value="todas">Todas las materias</option>
              {materias.map((materia, index) => (
                <option key={index} value={materia}>
                  {materia}
                </option>
              ))}
            </select>
          )}
          
          {(filters.status !== 'todas' || 
            filters.priority !== 'todas' || 
            filters.dateRange !== 'todas' ||
            filters.subject !== 'todas' ||
            searchTerm) && (
            <button 
              className="clear-filters"
              onClick={() => {
                setFilters({
                  status: 'todas',
                  subject: 'todas',
                  priority: 'todas',
                  dateRange: 'todas'
                });
                setSearchTerm('');
              }}
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      <div className="tareas-list-container">
        {tareasFiltradas.length > 0 ? (
          <ul className="tareas-list">
            {tareasFiltradas.map((tarea) => {
              const fechaTarea = parse(tarea.dueDate, 'dd/MM/yyyy', new Date());
              const estaVencida = isBefore(fechaTarea, new Date()) && tarea.status !== 'completada';
              
              return (
                <li 
                  key={tarea.id} 
                  className={`tarea-item ${getStatusClass(tarea.status)} ${getPriorityClass(tarea.priority)} ${estaVencida ? 'vencida' : ''}`}
                >
                  <div className="tarea-main">
                    <div className="tarea-header">
                      <span className="tarea-subject">{tarea.subject}</span>
                      <span className="tarea-date">
                        {formatDisplayDate(tarea.dueDate)}
                        {estaVencida && <span className="tarea-vencida-badge">Vencida</span>}
                      </span>
                    </div>
                    
                    <h4 className="tarea-title">{tarea.task}</h4>
                    
                    {tarea.description && (
                      <p className="tarea-description">{tarea.description}</p>
                    )}
                    
                    <div className="tarea-footer">
                      <span className={`tarea-status ${getStatusClass(tarea.status)}`}>
                        {tarea.status.charAt(0).toUpperCase() + tarea.status.slice(1)}
                      </span>
                      
                      <div className="tarea-actions">
                        <button 
                          className="btn-edit"
                          onClick={() => handleEditTarea(tarea)}
                          title="Editar tarea"
                        >
                          ✏️
                        </button>
                        <button 
                          className="btn-delete"
                          onClick={() => handleDeleteTarea(tarea.id)}
                          title="Eliminar tarea"
                        >
                          🗑️
                        </button>
                        <button 
                          className="btn-status"
                          onClick={() => {
                            const newStatus = tarea.status === 'completada' ? 'pendiente' : 'completada';
                            handleSaveTarea({
                              preventDefault: () => {},
                              target: { name: 'status', value: newStatus }
                            });
                          }}
                          title={tarea.status === 'completada' ? 'Marcar como pendiente' : 'Marcar como completada'}
                        >
                          {tarea.status === 'completada' ? '↩️' : '✅'}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tarea-priority">
                    <div className={`priority-indicator ${getPriorityClass(tarea.priority)}`}></div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="no-tareas">
            <p>No se encontraron tareas que coincidan con los filtros seleccionados.</p>
            <button 
              className="clear-filters"
              onClick={() => {
                setFilters({
                  status: 'todas',
                  subject: 'todas',
                  priority: 'todas',
                  dateRange: 'todas'
                });
                setSearchTerm('');
              }}
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
      
      <div className="tareas-summary">
        <div className="summary-item">
          <span className="summary-count">
            {tareasFiltradas.length}
          </span>
          <span>tareas mostradas</span>
        </div>
        
        <div className="summary-item">
          <span className="summary-count">
            {tareas.filter(t => t.status === 'pendiente').length}
          </span>
          <span>pendientes</span>
        </div>
        
        <div className="summary-item">
          <span className="summary-count">
            {tareas.filter(t => t.status === 'completada').length}
          </span>
          <span>completadas</span>
        </div>
        
        <div className="summary-item">
          <span className="summary-count">
            {tareas.filter(t => t.priority === 'alta').length}
          </span>
          <span>prioridad alta</span>
        </div>
      </div>
    </div>
  );
};

export default TareasData;