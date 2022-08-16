import { useEffect, useReducer } from "react";
import { todoReducer } from '../08-useReducer/todoReducer'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) );
      }, [ todos ]);


    // Agregar TODO
    const handleNewTodo = ( todo ) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        // Es la funcion que se va a llamar para mandar el action
        dispatch( action );

    }


    // Eliminar TODOs
    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }


    // Marcar como completada / pendiente
    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }


    
  return {
    todos,

    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.donde ).length,

    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
