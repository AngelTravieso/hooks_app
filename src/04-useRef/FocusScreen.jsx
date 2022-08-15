import { useRef } from "react"


export const FocusScreen = () => {
    
    // Use ref mantiene la referencia para evitar re-renderizaciones
    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select();

        // console.log(inputRef);
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef }
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control"
        />


        <button
            className="btn btn-primary mt-2"
            onClick={ onClick }    
        >
            Set focus
        </button>
    </>
  )
}
