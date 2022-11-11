import { UseWindowSize } from '../hooks/UseWindowSize';
import { navBarScroll } from '../hooks/navBarScroll';

export const Logo = () => {
    const [width] = UseWindowSize();
    const {opacity} = navBarScroll();

  return (
    <>
        <img  
             
            style={{ 
              opacity: opacity,
              transition: 'opacity .6s' 
            }}
            className={width < 970 ? 'logo-up' : 'logo-left'} 
            src='https://i.postimg.cc/RF6Bv9Bq/gif-search-removebg-preview-1-1.png' 
            border='0' alt='logo'

        />
    
    </>
  )
}
