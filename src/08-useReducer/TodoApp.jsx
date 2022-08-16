import { useEffect, useReducer, useState } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


    // Objeto con el estado incial
    const initialState = [
        // {
        //     id: new Date().getTime() * 3,
        //     description: 'Recolectar la piedra del tiempo',
        //     done: false,
        // },
    ];


    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }


export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [ todos ])
    

    // Para agregar un nuevo todo
    const handleNewTodo = ( todo ) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        // Es la funcion que se va a llamar para mandar el action
        dispatch( action );

    }


  return (

    <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={ todos } />
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo } />
            </div>                
        </div>
 
    </>
  )
}
