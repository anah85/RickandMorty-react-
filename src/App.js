import './App.css';
import PersonajesPage from './pages/PersonajesPage';
import { HomePage } from './pages/HomePage';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import DisplaceComponent from './components/DisplaceComponent/DisplaceComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

const [info, setInfo] = useState({});
const urlRM = "https://rickandmortyapi.com/api/character"   

const [character, setCharacter] = useState([]);
const onAnterior = () =>{
  setInfo(info.prev);
}
const onProxima = ()=>{
  setInfo(info.next);
}

useEffect(()=>{
    const getBuscarCharacter = async () =>{axios.get(urlRM).then((res)=>{
            setCharacter(res.data.results);
        })  
    };
    getBuscarCharacter()
}, []);
useEffect(()=>{
  const getInfo = async () =>{axios.get(urlRM).then((res)=>{
    setInfo(res.data.info);
      })  
  };
  getInfo()
}, []);
 

  return (
    <div className="App">
    <NavBarComponent></NavBarComponent>
   <HomePage></HomePage>
   <DisplaceComponent prev={info.prev} next={info.next} onAnterior={onAnterior} onProxima={onProxima}></DisplaceComponent>
<div className='container mt-5'>
    <PersonajesPage character={character}></PersonajesPage>
    <DisplaceComponent prev={info.prev} next={info.next} onAnterior={onAnterior} onProxima={onProxima}></DisplaceComponent>
</div>
    </div>
  );
}

export default App;
