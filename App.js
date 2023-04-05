import React,{useState} from 'react';
import "./App.css";
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

const App = () => {
  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([]);
  const[editId,setEditId]= useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault();//prevent refreshing

    if(editId){
      const editTodo=todos.find((i)=>i.id=editId);//to find the particular new id
      const updatedTodos=todos.map((t)=>
      t.id===editTodo.id
      ? (t={id:t.id,todo}):{id: t.id,todo: t.todo}
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }
    if(todo!=='')
    {
      setTodos([{id:`${todo}-${Date.now()}`,todo }, ...todos])//every id for every value shd be unique
    }
    setTodo("");
  };
  const handleDelete=(id)=>{
    const delTodo=todos.filter((to)=>to.id!==id);//if the current id's todo!=given todo, it is not going to be delted
    setTodos([...delTodo]);

  };
  const handleEdit=(id)=>{
    
    const editTodo=todos.find((i)=>i.id===id);
    setTodo(editTodo.todo);
    setEditId(id);
  };
  const handleClear=()=>{
       setTodos([]);
  }
  

  return (
    <div className="App">
      <div className="container">
        <h1>To do list App</h1>
       <TodoForm handleSubmit={handleSubmit} todo={todo} editId={editId} setTodo={setTodo} handleClear={handleClear}/>
       <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>

    </div>
  )
}

export default App
