import './App.css';
import PersonajesPage from './pages/PersonajesPage';
import { HomePage } from './pages/HomePage';
import DisplaceComponent from './components/DisplaceComponent/DisplaceComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoginPage from './pages/LoginPage';
import { login } from './auth/auth';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import RequiredComponent from './components/RequiredComponent/RequiredComponent';
import Header from './components/Header';

function App() {
const[user, setUser] = useState(null)
const authenticat =user != null
const loginUser=({email, password}) => setUser(login({email, password}));

const logoutUser = ()=> setUser(null)

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
   
<Header></Header>
    <Router>
    <LoginPage authenticat={authenticat} logoutUser={logoutUser}></LoginPage>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/personajes" element={<RequiredComponent authenticat={authenticat}><PersonajesPage/></RequiredComponent>}></Route>
      <Route path="/login" element={<LoginPage loginUser={loginUser}/>}></Route>

    </Routes>
    </Router>
   <DisplaceComponent prev={info.prev} next={info.next} onAnterior={onAnterior} onProxima={onProxima}></DisplaceComponent>
    <PersonajesPage character={character}></PersonajesPage>
    <DisplaceComponent prev={info.prev} next={info.next} onAnterior={onAnterior} onProxima={onProxima}></DisplaceComponent>

    </div>
  );
}

export default App;
