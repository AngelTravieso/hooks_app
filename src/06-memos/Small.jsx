// Así se ve mucho mas, se debe importar React primero
import React from 'react';

// Otra forma de hacerlo
// import { memo } from 'react';


export const Small = React.memo(({ value }) => {

    console.log('me volvi a dibujar :(');

  return (
    <small>{ value }</small>
  )
})
