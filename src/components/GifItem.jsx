import {motion} from 'framer-motion'


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
          initial ={{ opacity: 0} }
          whileInView ={{ opacity: 1 }}
        />
          
      </a>
        
    </motion.div>
  )
}
