import React from 'react';
import '../styles/LoadFile.css';

const LoadFile = () => {
  return (
    <div className="load-file-container">
      <h1>Carga archivos nuevos (Máx. 2GB)</h1>
      <div className="drop-zone">
        <div className="icon">
          <span role="img" aria-label="document-icon"></span>
        </div>
        <p>Arrastra archivo a esta zona o</p>
        <button className="select-file-button">Elegir el archivo en mi ordenador</button>
      </div>
    </div>
  );
};

export default LoadFile;