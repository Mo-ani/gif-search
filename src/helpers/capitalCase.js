
// Capitaliza todas las primeras letras

export const capitalCase = (str) => {
    let arr = []
    str.split( ' ' ).forEach((word) => {
         arr.push(word.charAt( 0 ).toUpperCase() + word.slice( 1 ).toLowerCase());
    })
  return arr.join( ' ' )
    
};