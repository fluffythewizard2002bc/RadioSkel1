import React, {useState} from 'react'
import Todoform from "./Todoform"


import "./Todo.css"
import Todolist from './Todolist'

const Todo = () => {
  const [todo, settodo] = useState("")

  const [allTodos, setallTodos] = useState([])

  const[editId ,seteditId] = useState(0)
  
  function handleSubmit(e){
    e.preventDefault();

    if(editId)
    {  
      // eslint-disable-next-line array-callback-return
      allTodos.map((e) => {
        if(e.id===editId){
          console.log("hello")
          e.todo=todo
        }
      })
      seteditId(0)
      settodo("")
      return;
    }

    if (todo !== ""){
      setallTodos([{id: `${todo}-${Date.now()}`,todo},...allTodos])
      settodo("")
    }
    
  }


  function handleDelete(id){
    const newTodo = allTodos.filter((e) => e.id !== id)
    // setallTodos([...newTodo])
    setallTodos(newTodo)
  }

  function handleEdit(id){
    const todoarray = allTodos.filter((t) => t.id ===id )
    settodo(todoarray[0].todo)
    seteditId(id);
  }

  return (
    <div className="App">
      <div className="Container">
        <h1>Todo List App</h1>
        <Todoform handleSubmit={handleSubmit} todo={todo} settodo={settodo} editId={editId}></Todoform>
        <Todolist allTodos={allTodos} handleEdit={handleEdit} handleDelete={handleDelete}></Todolist>
      </div>
    </div>
  )
}

export default Todo