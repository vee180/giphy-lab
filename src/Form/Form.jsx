import React ,{useState} from 'react'



export default function Form(props){
const [getSearch, setGetSearch] = useState('')


function handleChange(e){
    setGetSearch(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    props.giphySearch(getSearch)

}
    return(<>
    <h1>This is the form</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="giphyTitle">Title:</label>  
      <input id='giphyTitle' type="text" name='giphyTitle' value={getSearch} onChange={handleChange}/>
      <button type="submit">Find a  Giphy</button>
         </form>
    <div>
    <button onClick={props.getButton}> Giphy </button>
    </div>
    </>) 
}