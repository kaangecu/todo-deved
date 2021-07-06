import React from "react";

export default function Form({ setInputText, inputText,setTodos,todos,setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
   
  };
  const submitHandler = (e)=>{
      e.preventDefault();
    setTodos([...todos,{header:inputText,done:false, id:Math.random()*1000}])
    setInputText("")
  }
  const statusHandler = ({target:{value}})=>{
    setStatus(value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
