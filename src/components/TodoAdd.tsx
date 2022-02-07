import React, { useState } from 'react';
import ITodoItem from '../interfaces/ITodoItem';

type Props  = {
    todoItems : ITodoItem[];
    updateTodoItems : Function;
}

export default function TodoAdd(props : Props){
    const [title, setTitle] = useState("");

    function handleChange(event: React.FormEvent<HTMLInputElement>){
        setTitle(event.currentTarget.value);
    }

    function handleClick(){
        let lastTodoItem = props.todoItems.at(-1);
        let todoItemId = lastTodoItem === undefined ? 1 : lastTodoItem.id + 1;

        let todoItem : ITodoItem = {id: todoItemId, title: title, done: false}
        props.updateTodoItems(todoItem);
        setTitle("");
    }

    return <li><input onChange={handleChange} value={title}></input><button onClick={handleClick}>+</button></li>
}