

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];


const todoReducer = ( state = initialState, action = {} ) => {

    if( action.type === '[TODO] add todo') {
        return [ ...state, action.payload ];
    }

    return state;

}


let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    donde: false,
};


const addTodoAction = {
    type: '[TODO] add todo', // nombre
    payload: newTodo, // carga de la accion
}


todos = todoReducer( todos, addTodoAction );

console.log({state: todos});