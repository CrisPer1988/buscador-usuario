import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import BoxUser from './components/BoxUser';

function App() {
  const [user, setuser] = useState()
  const [inputValue, setInputValue] = useState()
  let userName = "";
  let opc = inputValue


 useEffect(() => {
  const url = "https://randomuser.me/api"
  
    axios.get(url)
    .then(res => setuser(res.data.results[0]))
    .catch(err => console.log(err)) 
 }, [opc])

 userName = user?.name.first;
 if(userName !== inputValue) {
  opc = user
  

  console.log("holaaaaaaaaa");
 }


const handleSubmit = e =>{
  e.preventDefault()
  setInputValue(e.target.valueIn.value)
}

//let userName = user?.name.first + " " + user?.name.last

console.log(userName);
//if(inputValue === userName)



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input id='valueIn' type="text" />
        <button>Buscar</button>
      </form>
      {

        inputValue !== userName ? <BoxUser user={user} />
         : <h3>invalido</h3>
        // inputValue === userName 
        // ? <BoxUser user={user} />
        // : <h3>invalido</h3>
      }
     
    </div>
  )
}

export default App
