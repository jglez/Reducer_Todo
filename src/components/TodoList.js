import todos from '../data/todos.js'

function TodoList() {
  return(
    <>
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.task}</li>
        })}
      </ul>
    </>
  )
}

export default TodoList