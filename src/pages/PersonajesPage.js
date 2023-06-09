
import React from "react";

const PersonajesPage = ({character}) => {

  return (
    <div className="row">
     {character.map((characters, index)=>(
    <div key={index} className="col mb-4">
    <div classname="card">
    <img src={characters.image} alt=""/>
    <h3 className="card-title">{characters.name}</h3>
    <div className="card-body">
    <p>Species: {characters.species}</p>
    <p>Gender: {characters.gender}</p>
    <p>Status: {characters.status}</p>
    <p>Location: {characters.location.name}</p>
    
    </div>
    </div>
    </div>    
    ))}
    </div>
  )
}

export default PersonajesPage