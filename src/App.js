import React, { useState } from 'react';
import Dinner from './Dinner';
import './App.css'


const App = () => {
  const [count, setCount] = useState(0)
  const [morning, setMorning] = useState(true);
  

  return(
    
    <div className={`box ${morning  ? 'daylight' : ''}`}>
      <h1>Day time = {morning ? 'Morning' : 'Night'}</h1>
      <h1>Day time = {morning ? 'Morning' : 'Night'}</h1>
      
      <Dinner counter={count}/>
      <button onClick={()=>{setCount(count + 1)}}>Increament</button>
    <button onClick={()=>{setCount(count - 1)}}>Decreamnet</button>
    <button onClick={()=>{setMorning(!morning)}}>Update Day</button>
    </div>
  )
}

export default App;
