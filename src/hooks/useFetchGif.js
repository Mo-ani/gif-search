import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGif'

export const useFetchGif = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //Se recomiernda crear una funcion asyncrona fuera del useEffect para no tener inconvenientes. Ya que getGif es una promesa.
    // const getImages = async() =>{ 
    //   const newImages = await getGif(category)
    //   setImages( newImages );
    // }

    useEffect(() => {
      //otra forma es consumir la promesa con un then
      getGif( category )
          .then( (img) => {
            setImages( img )
          });
          
      setIsLoading( false )
      // getImages();
      
    }, [])

    

  return {
    images: images,
    isLoading: isLoading
  }
}
