import React, { useState } from 'react'
import { capitalCase } from '../helpers/capitalCase' 
import { navBarScroll } from '../hooks/navBarScroll';
import { UseWindowSize } from '../hooks/UseWindowSize';
import { Logo } from './Logo';



export const AddCategory = ( { onNewCategory } ) => {

    // const inputSearch = useRef()
    const [inputValue, setinputValue] = useState('');
    const {navHeight,left,leftMobile,navHeightMobile} = navBarScroll();
    const [width] = UseWindowSize();

  // Cambia el valor del input y quita los espacios
  const onInputChange = ( { target } ) => {
      setinputValue( target.value );
  };



  //Hace una accion cuando damos enter
  const onSubmitAction = ( event ) =>{
      //Inpide que se haga refresh cuando doy enter
      event.preventDefault(); 
      //Si el valor el input value es menor a un caracter y invalidamos cualquier espacio adelante o atras.
      if( inputValue.trim().length <= 1){ return; };
      //Reseteamos los valores del input y actualizamos el inputValue
      //   inputSearch.current.value = '';
      setinputValue( '' );
      //Quitamos espacios y capitalizamos la primera letra
      const category = inputValue.trim()
      onNewCategory( capitalCase( category ) );

  };
  
  return (


        
      <form onSubmit={ onSubmitAction } >


            <div 
                className='background-input' 
                style={{
                    height: width > 970 ? navHeight : navHeightMobile,
                    transition: "all .5s"}}
                
                >
                <Logo  />
                <input 
                    type="search"
                    placeholder='Search Gif and Download'
                    value={ inputValue }
                    onChange={ onInputChange }
                    style={{
                        width: width < 970 ? '60%' : '70%',
                        transform: width < 970 ? leftMobile : left ,
                        transition: width < 970 ? "transform .5s" : "all .8s" , 
                    }}
                />       
            </div>
        </form>
  )
}

//Vemos que los eventos se colocan dentro del return y lo que hacen es llamar funciones que se encuentran por fuera.
