import { useReducer } from 'react'
import './App.css';
import ACTIONS from './actions/todoActions.js'
import reducer from './reducers/todoReducers.js'
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'


const complete = (evt) => {
  evt.target.classList.add('completed')
  console.log(evt.target)
}

function App() {
//  const [state, dispatch] = useReducer(reducer, { tasks: null })

//  function addTodo() {
//    dispatch({ type: ACTIONS.ADD_TODO})
//  }

//  function completeTodo() {
//    dispatch({ type: ACTIONS.COMPLETE_TODO})
//  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo</h1>

        <TodoForm />

        <TodoList />

        <button>Clear Completed</button>

      </header>
    </div>
  );
}

export default App;
