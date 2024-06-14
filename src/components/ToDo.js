import React, { useState } from 'react';
import TodoForm from './TodoForm'; 

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Clean Room' },
    { id: 2, content: 'Build Birdhouse' },
    { id: 3, content: 'Finish Studying' }
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = (content) => {
    const newTodo = {
      id: todos.length + 1,
      content: content
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <h1>To Do's</h1>
      {/* Render TodoForm and pass addTodo function as a prop */}
      <TodoForm addTodo={addTodo} />
      <div className="todos collection">
        {todos.length ? (
          todos.map(todo => {
            return (
              <li className="collection-item" key={todo.id}>
                <div className="show" key={todo.id}>
                  <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
                </div>
              </li>
            );
          })
        ) : null}
      </div>
    </>
  );
};

export default App;
