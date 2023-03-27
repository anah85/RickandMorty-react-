import React from 'react';
import PropTypes from 'prop-types';
import './NavBarComponent.css';
import es from "../../assets/es.png";
import gb from "../../assets/gb.png";

const NavBarComponent = () => (
  <div className="NavBarComponent">
  <div>
    <button className="btnIdioma"><img src={es} alt=""/>🇪🇸</button>
    <button className="btnIdioma"><img src={gb} alt=""/>🇬🇧</button>
  </div>
    <input type="text" placeholder='Buscar'/>
    <button>Login</button>
  </div>
);

NavBarComponent.propTypes = {};

NavBarComponent.defaultProps = {};

export default NavBarComponent;
