import React, {useState,useEffect} from 'react';
import axios from 'axios'

const Counter=()=> {
  const [counter, incrementCounter] = useState(0)
  const [todoName,setToDOname]=useState(' ')
  const [todoList,setTodoList]=useState([])
 
  useEffect(() => {
    document.title = counter
    //console.log(counter);
    axios.get('https://hooks-371b5.firebaseio.com/todos.json')
    .then(response=> {console.log(response.data);
    })
    axios.post('https://hooks-371b5.firebaseio.com/todos.json',todoList)
    .then(response=> {console.log(response.data);
    })

    return()=>{
      console.log('cleanup');
      
    }
  },[todoList,counter])
  
  const handleIncrement=()=> {
    incrementCounter(counter + 1);
  }

  const evetChangedHandler=(event)=>{
    setToDOname(event.target.value)
    
  }
  
  const addListHandler=()=>{
    setTodoList(todoList.concat(todoName))
    console.log(todoList)
    
  }

  return (
    <div>
      <div>{counter}</div>
      <hr />
      <button type="button" onClick={handleIncrement}>+</button>
      <button type="button" onClick={handleIncrement}>-</button>
      <hr/>
      <input type="text" placeholder="todo" onChange={evetChangedHandler} value={todoName}></input>
      <button onClick={addListHandler}>ADD</button>
      <ul>
        {
        todoList.map((todo,key)=>{
        return(<li key={key}>{todo}</li>)
        })}
      </ul>
    </div>
  ) 
}
export default Counter
