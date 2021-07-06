import React from 'react'
import Todo from './Todo'

export default function TodoList({todos,setTodos,renderedTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {renderedTodos.map(it => <Todo key={it.id} todo={it} setTodos={setTodos} todos={todos}/>)}
            </ul>
        </div>
    )
}
