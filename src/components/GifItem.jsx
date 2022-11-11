import {motion} from 'framer-motion'
import { UseWindowSize } from '../hooks/UseWindowSize'

export const GifItem = ( {title,url} ) => {


  return (

    <motion.div  

    whileHover={{ y: -15 }} // al hacer over
    initial={{ scale: 1.5 }}
    animate={{ scale:1 }}
    className="card">

      <a href={url} 
       download target="_blank">

        <motion.img
          src={ url } 
          alt={ title }
          initial ={{ scale: 0} }
          whileInView ={{scale: 1}}
          />
          
      </a>
        
    </motion.div>
  )
}
