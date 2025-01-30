import {  useState } from "react"
export default function App() {
  const [length,setlength]=useState(8)



  return (
    <div>
      <div>
        <h2 className="text-4xl text-center">PASSWORD GENERATOR</h2>
      </div>
      <div className="text-center py-6"> 
        <input type="text" />
        <button className="px-3 text-blue-800">COPY</button>
      </div>

      <div className="text-center py-6"> 
        <input type="range"
        min={8} max={100} value={length} onChange={(e)=>{setlength(e.target.value)}} />
        <label>Length{length}</label>
        <input type="checkbox" />
        <button className="px-3 text-blue-800">Number</button>
        <input type="checkbox" />
        <button className="px-3 text-blue-800">Characte  t5rdcec</button>
      </div>
    

    </div>
  
  )
}