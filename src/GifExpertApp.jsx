import { useState } from "react";
import { AddCategory,GifGrid,Footer } from "./components";



export const GifExpertApp = () => {
  const [ categories, setCategories ] = useState( [ 'Animation' ] )
  
  //Se recomiendo no mutar el array principal, si no crear una copia.

  const onAddCategory = ( newCategory ) =>{

      if( categories.includes( newCategory ) ){ return; }
      setCategories( [  newCategory ] ); //Hago una copia de todas las categorias y agregamos el nuevo valor

      // otra forma
      // setCategories( cat => [...cat, 'Valorant'] )

  };



  return (
    <>
        
        {/* Enviamos una prop al componente hijo con una de las funciones de aqui */}
        < AddCategory onNewCategory={ onAddCategory }  />

          
          
            
        {
        categories.map( (category) => {
              return (
                  <GifGrid key={ category } category={category} />
              )
        })
        }
        
        <Footer />

    </>

  )
};
