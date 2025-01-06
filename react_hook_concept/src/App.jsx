import { useState } from ' '


function App() {
  let [count, setCount] = useState(1);

  const increase=()=>{
    if(count<10){
      setCount(count+1);
    }


  }
  const decrease=()=>{
    if(count>0){
      setCount(count-1);
    }
    

  }
  

  return (
    <>
    <p>VALUE:{count}</p>
    <button onClick={increase}>Increment</button>
    <button onClick={decrease}>Decrement</button>
    <h2>TOTAL is ::{count}</h2>
    </>
  )
}

export default App
