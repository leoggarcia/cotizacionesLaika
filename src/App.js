import React, {useState} from 'react';
import './App.css';
import { Fomulario } from './Componentes/Fomulario';
import { Header } from './Componentes/Header';
import { VistaPdf } from './Componentes/VistaPdf';

function App() {
  const [cotizacion, setCotizacion] = useState([]);
  const [print, setPrint] = useState(false);

  const crearCotizacion = cotizacionNueva =>{

  }

  return (
    <div className="App">
      {!print ? <Fomulario setImprimir={setPrint} setCotizacion={setCotizacion} /> : <VistaPdf cotizacion={cotizacion} setPrint={setPrint}/>}
    </div>
  );
}

export default App;
