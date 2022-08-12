import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });


    // const { username, email, password } = formState;

   
    // useEffect(() => {
    //     // console.log('useEffect call');
    // }, []);


    // useEffect(() => {
    //     // console.log('FormState change');
    // }, [ formState ]);


    // useEffect(() => {
    //     // console.log('Email change');
    // }, [ email ]);
    
  return (
    <>
        <h1>Hook Form</h1>

        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
            autoComplete="off"
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="correo@correo.com"
            name="email"
            autoComplete="off" 
            value={ email }
            onChange={ onInputChange }
        />

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="contraseña"
            name="password"
            autoComplete="off" 
            value={ password }
            onChange={ onInputChange }
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onResetForm }
            >Borrar
        </button>

    </>
  )
}
