import React from 'react';
import ITodoItem from '../interfaces/ITodoItem';

export default function TodoItem({title} : ITodoItem){

    const [done, setDone] = React.useState(false);

    function toggleDone(){
        setDone(!done);
    }

    return <li onClick={toggleDone} style={done ? {textDecoration: "line-through"} : undefined }>{title}</li>
}