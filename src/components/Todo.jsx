import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import todo from "../store/todo";

const Todo = observer(() => {
  const [value, setValue] = useState('');

  return (
    <div className="todos-container">
      <div>
        <input type="text" className="todos__add-input"
               value={value} onChange={(e => setValue(e.target.value))}/>
        <button
          onClick={() => {
            setValue('')
            todo.addTodo(value)
          }}>Add
        </button>
      </div>
      <ul className="todos">
        {todo.todos.map(t => (
          <li className='todo' key={t.id}>
            <input type="checkbox" className="complete-input" id={t.title} checked={t.complete}
                   onChange={() => todo.completeTodo(t.id)}/>
            <label htmlFor={t.title} className={`label ${t.complete && 'complete'}`}>{t.title}</label>
            <button className="btn" onClick={() => todo.removeTodo(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
})

export default Todo;