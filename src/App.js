import React from 'react';
import './App.css';

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function Todo() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  const handleSubmit = () => {
    setTodos(todos =>
      todos.concat({
        text: input,
        id: generateId()
      })
    );

    setInput("");
  };

  const removeTodo = (id) => setTodos((todos) => todos.filter((todo) => todo.id !== id))

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="New Todo"
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {todos.map(({ text, id }) => (
          <li key = {id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
