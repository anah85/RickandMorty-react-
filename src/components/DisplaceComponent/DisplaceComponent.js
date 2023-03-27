import React from 'react';
import PropTypes from 'prop-types';
import './DisplaceComponent.css';

const DisplaceComponent = ({prev, next, onAnterior, onProxima}) => {
const hadleAnterior = ()=>{
  onAnterior();
}
const handleProxima = () => {
  onProxima();
}

  <div className="DisplaceComponent">
  <nav>
    <ul className="pagination">
    { prev ? (<li><button className="page-item" onClick={hadleAnterior}>Anterior</button></li>) : null}
    { next ? (<li><button className="page-item" onClick={handleProxima}>Próxima</button></li>) : null} 
      
    </ul>
    </nav>
  </div>
};

DisplaceComponent.propTypes = {};

DisplaceComponent.defaultProps = {};

export default DisplaceComponent;
