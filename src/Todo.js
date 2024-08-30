import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Delete, Update } from './actions'

export default function Todo({title,id}) {
  let dispatch = useDispatch()
  let [edit,setEdit]=useState(false)
  let [newtitle,setnewTitle]=useState(title)
  let handleTodo = ()=>{
    if(newtitle.trim())
    {
      dispatch(Update({id:id,title:newtitle}))
      setEdit(false)
    }
  }
  let handleDelete=()=>
  {
    dispatch(Delete(id))
  }
  return (
    <div className='container mt-2'>
      {
        edit?(
         <div > 
          <input className='form-control' value={newtitle} onChange={(e)=>{setnewTitle(e.target.value)}}/>
          <button className='btn btn-info' onClick={handleTodo}>Save</button>
          </div> 
        ):(<li className='list-group-item'>
          <p>{title}</p>
          <div className='actions'>
            <button className='btn btn-warning' onClick={()=>setEdit(true)}>Update</button>
            <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
          </div>
        </li>)
      }
      
    </div>
  )
}
