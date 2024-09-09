import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import ToDoItem from './components/listItems'
import Button from './components/Button';
import CounterDemo from './components/countercomp';
import './style.css';

function App() {
  return (
     
    
    <div className="todo-container">
     <CounterDemo/>
      <Header title="Daily schedule"/>
      <ToDoItem text="Eat" completed="true"/>
      <ToDoItem text="Code"/>
      <ToDoItem text="Sleep"/>
      <ToDoItem text="Repeat"/>
      <Button/>
    </div>
  );
};

export default App;
