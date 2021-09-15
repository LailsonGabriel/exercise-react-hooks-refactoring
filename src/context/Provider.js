// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const defaultCars = {
    redCar: false,
    blueCar: false,
    yellowCar: false,
  };
  const [cars, setCars] = useState(defaultCars);
  const [signal, setSignal] = useState({ signalColor: 'red' });

  function moveCar(car, side) {
    setCars({ ...cars, [car]: side });
  }

  function changeSignal(signalColor) {
    setSignal({ signalColor });
  }

  const context = {
    cars,
    moveCar,
    signal,
    changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>{children}</CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
