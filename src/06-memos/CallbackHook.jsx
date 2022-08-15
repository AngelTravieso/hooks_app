import { useCallback, useEffect } from "react";
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement";



export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // useCallback sirve para memorizar funciones
    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value );
      },
      [],
    );

    // Cuando la funcion cambia disparar un efecto
    useEffect(() => {
        // incrementFather();
    }, [incrementFather]);
    

    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />

        <ShowIncrement increment={ incrementFather } />

    </>
  )
}
