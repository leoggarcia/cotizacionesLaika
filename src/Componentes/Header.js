// rafc PARA CREAR EL COMPONENTE
import React from 'react'
import logo from '../imagenes/LOGO LAIKA POSITIVO.png';
import '../css/Header.css'

export const Header = () => {
  return (
    <div className='header'>
        <img src={logo} className='header-logo'/>
        <h1>Generar cotización</h1>
    </div>
  )
}
