import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Angel',
        email: 'angeltraviesoc@gmail.com',
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value,
        });
    }


    useEffect(() => {
        // console.log('useEffect call');
    }, []);


    useEffect(() => {
        // console.log('FormState change');
    }, [ formState ]);


    useEffect(() => {
        // console.log('Email change');
    }, [ email ]);
    

  return (
    <>
        <h1>Simple Form</h1>

        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
            autoComplete="off"
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="correo@correo.com"
            name="email"
            autoComplete="off" 
            value={email}
            onChange={onInputChange}
        />


        {
            (username === 'angel2')  && <Message />
        }

    </>
  )
}
