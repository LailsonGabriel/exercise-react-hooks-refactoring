// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const defaultCars = {
    redCar: false,
    blueCar: false,
    yellowCar: false,
  }
  const [cars, setCars] = useState(defaultCars);

  function moveCar(car, side) {
    setCars({...cars, [car]: side})
  };

  const context = {
    ...cars,
    moveCar: moveCar,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
