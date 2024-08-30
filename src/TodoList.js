import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'
export default function TodoList() {
  let todos =  useSelector((state)=>state.todo)
  return (
    <div className='container'>
      <ul className='list-group mt-4'>
      {todos.map((t)=>{
            return <Todo id={t.id} title={t.title}/>
      })}
    </ul>
    </div>
    
  )
}
