import React, { useState } from 'react'

function TodoForm({addTodo}) {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className='todo-form'>
      <h2>
        Criar tarefa:
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Digite o titulo'
          onChange={(e) => setValue(e.target.value)}
          value={value} />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option value="Escolha uma tarefa">Escolha uma tarefa</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudo">Estudo</option>
        </select>
        <button type="submit">Criar a tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm