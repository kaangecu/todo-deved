import React from "react";

export default function Todo({ todo, setTodos,todos}) {

const completeHandler=()=>{
  setTodos(todos.map(
    (it)=>{
      if(it===todo)
      return {...it,done:!it.done}
      
      else
      return it
    }
  ))
}

const deleteHandler=()=>{
    const newTodos = todos.filter(it => todo.id!==it.id)
    setTodos(newTodos)
}
  return (
    <div className="todo">
      <li className={`todo-item ${todo.done ? "completed" : ""}`}>
        {todo.header} : {todo.done ? "Bitti" : "Devam Ediyor"}
      </li>
      <button className="complete-btn" onClick={completeHandler}> 
        <i className="fas  fa-check"> </i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas  fa-trash"> </i>
      </button>
    </div>
  );
}
