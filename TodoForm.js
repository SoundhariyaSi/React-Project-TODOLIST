import React from 'react'

const TodoForm = ({handleSubmit,todo,editId,setTodo,handleClear})=> {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
    <input type='text' value={todo} 
    onChange={(e)=>setTodo(e.target.value)} />
    <button type="submit">{editId?"Edit":"Add"}</button>
    <button onClick={()=>handleClear()}>Clear All</button>
  </form>
  )
}

export default TodoForm