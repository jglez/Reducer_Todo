import './App.css';
import todos from './data/todos.js'

const complete = (evt) => {
  evt.target.classList.add('completed')
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo</h1>

        {todos.map(todo => {
          return <div className='tasks' onClick={complete} key={todo.id}>{todo.task}</div>
        })}


      </header>
    </div>
  );
}

export default App;
