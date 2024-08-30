
import { useDispatch } from 'react-redux';
import './App.css';
import { Add } from './actions';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  let dispatch = useDispatch()
  let [title,updateTitle]=useState("")
  function Handler()
  {
    if(title.trim())
    {
      const newtodo = {title:title}
      dispatch(Add(newtodo))
      updateTitle('')
    }
      
  }
  return (
    <>
    <div >

    <div className='container mt-5 w-50'>
      <h1 className='text-primary text-center'>Todo Application</h1>
      <div className='input-group'>
      <input className='form-control' type='text' value={title} onChange={(e)=>updateTitle(e.target.value)}/>
      <button className='btn btn-success' onClick={()=>{Handler()}}>Enter</button>
      </div>
      
      
    </div>
    <TodoList></TodoList>


    </div>

    
   
   

    </>
  );
}

export default App;
