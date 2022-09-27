import React, {useState} from 'react';
import '../css/Formulario.css';
import { Servicio } from './Servicio';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './Header';

export const Fomulario = ({ setImprimir, setCotizacion }) => {

    const [servicios, setServicios] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [iva, setIva] = useState(0);
    const [total, setTotal] = useState(0);

    const agregarServicio = () => {
        if(!document.querySelector('#descripcionServicio').value){
            alert("La descripcion no puede estar vacia");
        }else{
            document.querySelector("#noServicosP").style.display = 'none';
            const servicioNew = {
                id: uuidv4(),
                descripcion: document.querySelector('#descripcionServicio').value, 
                tiempo: document.querySelector('#tiempo').value, 
                precio: document.querySelector('#precio').value, 
            }
            const servicisoActualizados = [servicioNew, ...servicios];
            setServicios(servicisoActualizados);
            calcularTotales(servicisoActualizados);
        }
    }

    const eliminiarServicio = id =>{
        if(servicios.length == 1){
            document.querySelector("#noServicosP").style.display = 'block';
        }
        const servicisoActualizados = servicios.filter(servicio => servicio.id !== id);
        setServicios(servicisoActualizados);
        calcularTotales(servicisoActualizados);
    }

    const calcularTotales = servicios => {
        var subtotal = 0;
        var iva = 0;
        var total = 0;
        servicios.forEach(servicio => {
            subtotal += parseFloat(servicio.precio);
        });
        iva = subtotal * 0.16;
        total = iva + subtotal;

        setSubTotal(round(subtotal, 1));
        setIva(round(iva, 1));
        setTotal(round(total, 1));
        //console.log("Subtotal: " + subtotal + "   iva: " + iva + "    total: " + total);
    }

    const generarCotizacion = () =>{
        const cotizacionNueva = {
            id: uuidv4(),
            nombreCliente: document.querySelector('#nombreCliente').value,
            nombreEmpresa: document.querySelector('#nombreEmpresa').value,
            numeroCliente: document.querySelector('#numeroCliente').value,
            fecha: document.querySelector('#fecha').value,
            servicios: servicios,
            subTotal: subTotal,
            iva: iva,
            total: total,
        }
        setCotizacion(cotizacionNueva);
        setImprimir(true);
    }
    
    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        var toreturn = Math.round(value * multiplier) / multiplier
        console.log(toreturn, value);
        return toreturn;
    }
  

  return (
      <>
        <Header />
        <div className='formulario-box'>
            <form>
                <div className='fila-start'>
                    <label>Fecha de cotización</label>
                    <input id='fecha' type='date' />
                </div>
                <div className='fila'>
                    <input style={{width: '30%'}} type='text' id='nombreCliente' placeholder='Nombre del cliente'/>
                    <input style={{width: '30%'}} type='text' id='nombreEmpresa' placeholder='Nombre de la empresa'/>
                    <input style={{width: '30%'}} type='text' id='numeroCliente' placeholder='Numero de cliente'/>
                </div>
                <p className='subtuitulo'>Servicios ofrecidos</p>
                <div className='fila'>
                    <input style={{width: '100%'}} type='text' id='descripcionServicio' placeholder='Descripción del servicio'/>
                </div>
                <div className='fila'>
                    <input style={{width: '46%'}} type='text' id='tiempo' placeholder='Tiempo maximo de entrega'/>
                    <input style={{width: '46%'}} type='text' id='precio' placeholder='Precio del servicio'/>
                </div>
                <div className='fila'>
                    <button type='button' onClick={agregarServicio} className='btn-agregar-serv'>Agregar servicio</button>
                </div>
                <div className='fila'>
                    <div className='servicios-box'>
                        {
                            servicios.map(function(servicio){
                                return (
                                    <Servicio key={servicio.id} id={servicio.id} descripcion={servicio.descripcion} tiempo={servicio.tiempo} precio={servicio.precio} eliminarServicio={eliminiarServicio} />
                                ); 
                            })
                        }
                        <p id="noServicosP">No se han agregado servicios</p>
                    </div>
                </div>
                

                <div className='fila-start'>
                    <div className='total-box'>
                        <p className='total-label'>Sub-total:</p>
                        <p className='total-num'>${subTotal}</p>
                    </div>
                    <div className='total-box'>
                        <p className='total-label'>IVA (16%):</p>
                        <p className='total-num'>${iva}</p>
                    </div>
                    <div className='total-box'>
                        <p className='total-full-texto'>Total:</p>
                        <p className='total-full'>${total}</p>
                    </div>
                </div>
                <button onClick={generarCotizacion} className='btn-generar'>Generar cotización</button>
            </form>
        </div>
      </>
    
  )
}
