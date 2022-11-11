
export const getGif = async(category) =>{

  const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=GMhp7HiSv7feg4zkeWzO3VeKni9QFCaZ&q=${category}&limit=30`;
  const resp = await fetch( gifUrl );
  const {data} = await resp.json();

  //Como la data nos entrega un array con varios objetos dentro, hacemos un map y extraemos el id el titulo y el url de cada imagen. Abajo retornamos un objeto con cada uno de esos items.

  const gifs = data.map( img =>{
    return{

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }
  });

  // console.log(gifs)
  return gifs
};