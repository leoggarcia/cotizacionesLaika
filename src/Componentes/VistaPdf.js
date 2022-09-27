import React from 'react'
import logo from '../imagenes/LOGO LAIKA POSITIVO.png';
import '../css/VistaPdf.css'
import { AiOutlineLeft } from "react-icons/ai";

export const VistaPdf = ({id, cotizacion, setPrint}) => {
  const cambiarImprimir = () =>{
    console.log("Regresar");
    setPrint(false);
  }

  return (
    <div className='cotizacion-print'>
      <button className='btn-regresar' onClick={cambiarImprimir}><AiOutlineLeft />Regresar</button>
        <img className='logo' src={logo} />
        <div className='fila'>
            <div className='col-50'>
                <p>{cotizacion.nombreEmpresa} - {cotizacion.nombreCliente}</p>
                <p><b>No. cliente: </b>{cotizacion.numeroCliente}</p>
            </div>
            <div className='col-50 text-end'>
                <p className='cot-titulo'><b>Cotización</b></p>
                <p>Fecha: {cotizacion.fecha}</p>
            </div>
        </div>
        <div className='tabla'>
          <div className='fila top-tabla'>
            <div className='col-60'>
              <p className='text-center' style={{fontWeight: '600'}}>DESCRIPCIÓN DEL SERVICIO</p>
            </div>
            <div className='col-20'>
              <p className='titulo-tabla'>TIEMPO MAXIMO<br />DE ENTREGA</p>
            </div>
            <div className='col-20'>
              <p className='titulo-tabla'>PRECIO</p>
            </div>
          </div>
          <div className='servicios-p'>
            {
              cotizacion.servicios.map(function(servicio){
                return (
                  <div className='fila servicio-p'>
                    <div className='col-60 desc-servicio'>
                      <p className='text-center'>• {servicio.descripcion}.</p>
                    </div>
                    <div className='col-20'>
                      <p className='info-ser'>{servicio.tiempo}</p>
                    </div>
                    <div className='col-20'>
                      <p className='info-ser'>${servicio.precio} <span style={{fontSize: '12px'}}>MXN</span></p>
                    </div>
                  </div>
                ); 
              })
            }

            {/* <div className='fila servicio-p'>
              <div className='col-60 desc-servicio'>
                <p className='text-center'>• Diseño de sitio web tipo catalogo con posibilidad de expansión a tienda en línea con carrito de compras.</p>
              </div>
              <div className='col-20'>
                <p className='info-ser'>2 Semanas</p>
              </div>
              <div className='col-20'>
                <p className='info-ser'>$0.00 <span style={{fontSize: '12px'}}>MXN</span></p>
              </div>
            </div>
            <div className='fila servicio-p'>
              <div className='col-60 desc-servicio'>
                <p className='text-center'>• Hosting y dominio personalizado para sitio web sencillo por un año.</p>
              </div>
              <div className='col-20'>
                <p className='info-ser'>2 días de configuración </p>
              </div>
              <div className='col-20'>
                <p className='info-ser'>$500.00 <span style={{fontSize: '12px'}}>MXN</span></p>
              </div>
            </div> */}
          </div>
          <div className='fila totales'>
            <div className='col-33'>
              <p className='titulo-tabla'>SUB-TOTAL </p>
              <p>${cotizacion.subTotal} <span style={{fontSize: '12px'}}>MXN</span></p>
            </div>
            <div className='col-33'>
              <p className='titulo-tabla'>IVA </p>
              <p>${cotizacion.iva} <span style={{fontSize: '12px'}}>MXN</span></p>
            </div>
            <div className='col-33'>
              <p className='titulo-tabla'>TOTAL </p>
              <p>${cotizacion.total} <span style={{fontSize: '12px'}}>MXN</span></p>
            </div>
          </div>
        </div>
        <b>TÉRMINOS</b>
        <ol>
          <li>El 50% del costo total será pagado al iniciar el proyecto y el resto del pago se realizará al finalizar el proyecto con excepción del dominio y hosting que se pueden pagar al finalizar el proyecto. La forma de pago será por medio de transferencia bancaria. </li>
          <li>El tiempo de entrega empieza cuando el cliente nos proporcione toda la información necesaria para la terminación del proyecto (textos, imágenes, videos).</li>
          <li>Esta cotización tendrá validez <b>28 días</b> despues de ser enviada</li>
        </ol>
        <div className='pagebreak'></div>
        <h2 style={{marginTop: '50px'}}>DESCRIPCIÓN DEL PROYECTO</h2>
        <ul>
          <li>Diseño web personalizado.</li>
          <li>Sitio web adaptable al medio en donde se visualiza (Responsivo). Puede verse perfectamente en celulares, tabletas y computadoras de escritorio o laptops.</li>
          <li>Panel del control interno intuitivo para una comprensión mucho más rápida del sistema. Esta sería la parte autoadministrable donde se gestionará toda la información del sitio web, como noticias, textos, imágenes y productos.</li>
          <li>Creación de secciones en forma dinámica y creativa. Se podrán agregar nuevas páginas, imágenes, videos, etc.</li>
          <li>Formularios de contacto directo a uno o más correos, con la posibilidad de guardar toda la información en base de datos y exportarla a un Excel.</li>
          <li>Sitio web con herramientas para optimización de SEO e indexación en buscadores.</li>
          <li>Integración de aplicaciones como redes sociales y herramientas de análisis de Google</li>
        </ul>

        <p style={{fontSize: '13px', marginTop: '30px'}}>*En el precio total del proyecto ya se tienen contemplados aspectos como el costo hosting y dominio por un año (en caso de que no se especifique en la tabla de precios y no se cuente con uno), así como herramientas para el diseño del sitio y plugins.</p>
    </div>
  )
}
