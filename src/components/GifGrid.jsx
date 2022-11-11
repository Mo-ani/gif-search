import { useFetchGif } from '../hooks/useFetchGif';
import { GifItem } from './GifItem';


export const GifGrid = ( {category} ) => {

    //custom hook, cuando tenemos mas de un state
    const { images,isLoading } = useFetchGif( category );
    
    
  return (
    <>
        <h3> {category} </h3>

        {
          isLoading && ( <h2>Cargando...</h2> )
        }

          <div className="card-grid">
          { 
          
          images.map( ( images ) =>{
            return <GifItem  
              key={images.id}
              { ...images } //con esto le enviamos todas las props al componente.

            />
          }) 
          
          
          }
          </div>
        
        {/* <p> {counter} </p> */}
        {/* <button onClick={ () => { setCounter( counter + 1 ) } }>+1</button> */}
    </>
  )
}
