import {makeAutoObservable} from "mobx";
import nextId from "react-id-generator";

class Todo {
  todos = [
    {id: 'todo-id-1', title: 'Lear English', complete: false},
    {id: 'todo-id-2', title: 'Lear React', complete: false},
    {id: 'todo-id-3', title: 'Lear Angular', complete: false}
  ];

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(title) {
    const newTodo = {
      id: nextId("new-todo-id"),
      title: title,
      complete: false
    }
    this.todos.push(newTodo)
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completeTodo(id) {
    this.todos = this.todos.map(todo => (todo.id === id) ? {...todo, complete: !todo.complete} : todo)
  }
}

export default new Todo();