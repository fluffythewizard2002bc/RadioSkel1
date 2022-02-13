import React from 'react'

const Todolist = ({allTodos,handleEdit,handleDelete}) => {
    return (
        <ul className="allToDo">
          {
            allTodos.map((t) =>(
              <li className="singleTodo">
                <span className="Todotext" key={t.id}>{t.todo}</span>
                <button onClick={() => handleEdit(t.id)}>Edit</button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </li>
              ))
          }
        </ul>
            
       
    )
}

export default Todolist