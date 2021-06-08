import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  const [todos,setTodos]=useState(['Take dogs for a walk','Take the rubish out','Welcome to funsoft systems']);
  const[input,setInput]=useState('');
  console.log(input);

  const addTodo = (event) =>{
    //this will fire when the button is clicked
   event.preventDefault();//stop refresh
    console.log('The button clicked');
    setTodos([...todos,input]);
    setInput(''); //clear up the input
  }
  return (
    <div className="App">
      <h1>Hello Funsoft Programmers</h1>
    
      <input value={input} onChange={event=> setInput(event.target.value)}/>
      <Button type="submit" onClick={addTodo} variant="contained" color="primary">
      Add Todo
</Button>
      {/* <Button onClick={addTodo}>Add Todo</Button> */}
      
      <ul>
        {todos.map(todo =>(
        <li>{todo}</li>
        ))}
        
      </ul>

    </div>
  );
}

export default App;
