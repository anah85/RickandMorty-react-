
import React from "react";

const PersonajesPage = ({character}) => {

  return (
    <div className="row">
     {character.map((characters, index)=>(
    <div key={index} className="col mb-4">
    <div classname="card">
    <img src={characters.image} alt=""/>
    <div className="card-body">
    <h5 className="card-title">{characters.name}</h5>
    <p>Location: {characters.location.name}</p>
    <p>Species: {characters.species}</p>
    
    </div>
    </div>
    </div>    
    ))}
    </div>
  )
}

export default PersonajesPage