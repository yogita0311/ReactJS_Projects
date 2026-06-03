import { useState } from 'react'

function Todo() {
    const[newTodo, setNewTodo] = useState('')
    const[todos, setTodos] = useState([])
    
    //Add button sathi
    const handleSubmit = (e) =>{
       e.preventDefault();
       if(newTodo){     //he check krnar ki newTodo mdhe value aahe ka
        setTodos([...todos, {text:newTodo, completed:false}])
        setNewTodo('')
       }
    }
    
    //Delete button sathi. index use krun delete kraych task.
    const handleDelete = (index) =>{
        const newTodos = [...todos];      //[...todos] spread operator aahe
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)
    }
  
  return (
    <div>
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Add new todo'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}  //value la target kel aani tila newTodo variable mdhe store kel.
            />
            <button type='submit'>Add Todo</button>
        </form>
        <ul> 
            {todos.map((todo, index) => (    //it is a map loop. todo mdhe ek ek krun array element value store honar. detete button vr click kelyavr ha loop punha chalnar aani check krnar ki task complete aahe ka asel tr tyavr line odhnar.
              
              //key la index pass kraychi
              <li key={index}>               
                <span
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo
