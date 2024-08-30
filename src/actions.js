export function Add(task)
{
    return({type:'AddTodo',payload:task})
}
export function Update(task)
{
    return({type:'UpdateTodo',payload:task})
}
export function Delete(id)
{
    return({type:'DeleteTodo',payload:id})
}
