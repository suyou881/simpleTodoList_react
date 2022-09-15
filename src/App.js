import React, { useRef, useState } from 'react';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import Rooms from './Rooms';

export default function App() {
  let[todolist, setTodolist] = useState([]);
  let[curID, setCurId] = useState(0);
  let[desc, setDesc] = useState('');

  const focusRef = useRef();

  function onAdd(){
    const todo = {id:curID, desc};
    console.log(curID);
    setCurId(++curID);
    setTodolist([...todolist, todo]);
    setDesc('');
    onReset();
  }

  function onDelete(e){
    const id = Number(e.target.dataset.id);
    const newTodoList = todolist.filter(todo=>todo.id!==id);
    setTodolist(newTodoList);
  }

  function onReset(){
    focusRef.current.focus();
  }

  function onSaveToServer(){
    alert('not yet');
  }
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todolist.map(todo=>(
          <li key={todo.id}>
            <span>{todo.desc}</span>
            <button data-id={todo.id} onClick={onDelete}> Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" value={desc} onChange={e=> setDesc(e.target.value)} ref={focusRef}></input>
      <button onClick={onAdd}>Add</button>
      <button onClick={onSaveToServer}>Save to Server</button>
    </>
  )
}