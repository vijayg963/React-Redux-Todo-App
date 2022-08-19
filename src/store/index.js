import { createStore } from 'redux';

function reducerTodo(state = [], action) {
  switch (action.type) {
    case 'add':
      return state.concat({ todo: action.todo, isCompleted: false });
    case 'remove':
      return state.filter((elm, index) => index !== Number(action.id));
    case 'toggle':
      return state.filter((elm, index) => {
        if (index === Number(action.id)) {
          elm.isCompleted = action.isCompleted;
        }
        return elm;
      });
    default:
      return state;
  }
}

let store = createStore(reducerTodo);
export default store;
