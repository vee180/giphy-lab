import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form/Form'
import GiphyImage from './GiphyImage/GiphyImage'

function App() {
 const [image, setImage] = useState('')

 useEffect(() =>{
const giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=CqhoGv4lcfGV4wOpxPVfbn0bXhmpHB9c&limit=1`;

async function getGiphy(){
  const response = await fetch (giphyUrl);
  const data = await response.json();
  setImage(data.data.images.fixed_height.url);

}
getGiphy()
 }, [])

 async function getButton(){
const giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=CqhoGv4lcfGV4wOpxPVfbn0bXhmpHB9c&limit=1`;
  const response = await fetch(giphyUrl);
  const data = await response.json();
  setImage(data.data.images.fixed_height.url);
  
 }

async function getSearch(giphySearch){

  const giphyUrl = `https://api.giphy.com/v1/gifs/search?q=${giphySearch}&api_key=CqhoGv4lcfGV4wOpxPVfbn0bXhmpHB9c&limit=1`;
  const response = await fetch(giphyUrl);
  const data = await response.json
  ();
  setImage(data.data[0].images.fixed_height.url)
}
  return (
    <>
     <h1>Giphy</h1> 
      <Form  getButton={getButton} giphySearch={getSearch}/>  
      <GiphyImage image={image} />
    </>
  )
}

export default App
