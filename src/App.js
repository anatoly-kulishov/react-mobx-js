import React from 'react';
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="page-title">MobX</h1>
      <Counter/>
      <Todo/>
    </div>
  );
}

export default App;
