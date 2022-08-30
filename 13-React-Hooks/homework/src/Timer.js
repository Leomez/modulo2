import { Button } from 'bootstrap';
import React from 'react';
import './Timer.css'
import { useState, useEffect, useRef } from 'react';

const Timer = () => {

  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');


  function toggle() {
    setActivo(!activo)
  }
  function reset() {
    setSegundos(0);
    setActivo(false)
  }
  function cambioTipo() {
    if (tipo === 'Cuenta Regresiva') {
      setTipo('Contador');
      console.log('Cambie a contador');
    }
    if (tipo === 'Contador') {
      setTipo('Cuenta regresiva')
      console.log('cambie acuenta regresiva');
    }
  }

  
  useEffect( () => {
    let intervalo = null;
    if(activo && tipo === 'Contador'){
      intervalo = setInterval( () => {
        setSegundos( segundos => segundos + 1)
      }, 1000)
    }
    if(activo && tipo === 'Cuenta regresiva') {
      intervalo = setInterval( () => {
        setSegundos( segundos => segundos - 1)
      }, 1000)
    }
    if(!activo && segundos !==0 && tipo === 'Contador') {
      clearInterval(intervalo)
    }
    if(segundos === 0 && tipo === 'Cuenta regresiva') {
      reset();
      clearInterval(intervalo)
    }
    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo] )


  const myRef = useRef(null);

  function agregaSegundos() {
    let ref = myRef.current.value;
    setSegundos(ref)
  }


  return (
    <div className="app">
      Componente Timer
      <div className="time">
        {segundos}
      </div>
      <div>
        <button className={`button-primary button-primary-${activo? 'active' : 'inactive'}`} onClick={toggle} >
          {activo? 'pausa' : 'Inicio'}          
        </button>
        <button className='button-secundary' onClick={reset}>
          Reset
        </button>
      </div>
      <button className='button' onClick={cambioTipo}>
        {tipo}
      </button>
      {tipo === 'Cuenta regresiva' && <input type='number' ref={myRef} onChange={agregaSegundos} placeholder='ingresa segundos' autoComplete='off'/>}  
      
    </div>
  );

  

  
};

export default Timer;
