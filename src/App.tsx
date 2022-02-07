import React from 'react';
import './App.css';
import ITodoItem from './interfaces/ITodoItem';
import TodoAdd from './components/TodoAdd';
import TodoItem from './components/TodoItem';

let todoItem : ITodoItem = {id: 1, title:"Buy Milk", done:false};
let todoItem2 : ITodoItem = {id: 2, title:"Buy Cornflakes", done:false};
let todoItems : ITodoItem[] = [];
todoItems.push(todoItem);
todoItems.push(todoItem2);

function createTodoItemComponent(todoItem : ITodoItem){
  return <TodoItem key={todoItem.id} id={todoItem.id} title={todoItem.title} done={todoItem.done} />
}

function App() {
  const [todoItemsState, setTodoItems] = React.useState(todoItems);

  function updateTodoItems(todoItem : ITodoItem){
    setTodoItems([...todoItemsState, todoItem]);
  }

  return (
    <div className="App">
      <h2>Just Another Todo</h2>
      <ul>
        <TodoAdd todoItems={todoItemsState} updateTodoItems={updateTodoItems}/>
        {todoItemsState.map(createTodoItemComponent)}
      </ul>
    </div>
  );
}

export default App;
