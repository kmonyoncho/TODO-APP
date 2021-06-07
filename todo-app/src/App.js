import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos,setTodos]=useState(['Take dogs for a walk','Take the rubish out','Welcome to funsoft systems']);
  const[input,setInput]=useState('');
  console.log(input);

  const addTodo = (event) =>{
    //this will fire when the button is clicked
    console.log('The button clicked');
    setTodos([...todos,input]);
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <input value={input} onChange={event=> setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo =>(
        <li>{todo}</li>
        ))}
        
      </ul>

    </div>
  );
}

export default App;
