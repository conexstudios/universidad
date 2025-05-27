import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/Login.css';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!userId || !password) {
            setError('Por favor, ingresa tu Usuario ID y Contraseña.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: userId, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify({ id: data.user.id, username: data.user.username }));
                navigate('/dashboard');
            } else {
                setError(data.message || 'Error al iniciar sesión. Por favor, verifica tus credenciales.');
            }
        } catch (err) {
            setError('No se pudo conectar con el servidor. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-section">
                <div className="login-box">
                    <h2 className="login-title">Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="userId">Usuario ID</label>
                            <input
                                type="text"
                                id="userId"
                                
                                name="userId"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                required
                                placeholder="Usuario ID"
                            />
                        </div>
                        <div className="form-group password-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Contraseña"
                            />
                            <span
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </span>
                        </div>

                        {error && <p className="error-message" role="alert">{error}</p>}

                        <button type="submit" className="login-button primary">
                            Enviar
                        </button>
                    </form>

                    <button
                        type="button"
                        className="login-button secondary"
                        onClick={() => navigate('/preinscripcion')}
                    >
                        Preinscripción de Estudiantes
                    </button>

                    <p className="footer-links">
                        <Link to="/recuperar-contrasena">Recuperar contraseña</Link>
                        <span className="link-separator"> | </span>
                        <Link to="/validar-documentos">Validar documentos</Link>
                    </p>
                </div>
            </div>
            <div className="blue-background-section"></div>
        </div>
    );
};

export default Login;
