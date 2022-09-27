import React from 'react'
import { BsXCircle } from "react-icons/bs";
import '../css/Servicio.css'

export const Servicio = ({id, descripcion, tiempo, precio, eliminarServicio}) => {
  return (
    <div className='servicio'>
        <div className='descripcion-servicio'>
            <p className=''>
                {descripcion}
            </p>
            <div className='detalles-servicio'>
                <p>{tiempo}</p>
                <p>${precio}</p>
            </div>
        </div>
        
        <div className='icono-del' onClick={() => eliminarServicio(id)}>
            <BsXCircle />
        </div>
    </div>
  )
}
