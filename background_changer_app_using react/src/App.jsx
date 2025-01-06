import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="w-full h-screen flex items-center justify-center " style={{ backgroundColor: color }}>
      <div className="flex flex-row space-x-4">
        <button
          className="px-8 py-8 bg-red-500 text-white rounded"
          onClick={() => setColor("red")}
        >
          RED
        </button>
        <button
          className="px-8 py-7 bg-blue-500 text-white rounded"
          onClick={() => setColor("blue")}
        >
          BLUE
        </button>
        <button
          className="px-8 py-7 bg-yellow-500 text-black rounded"
          onClick={() => setColor("yellow")}
        >
          YELLOW
        </button>
        <button
          className="px-8 py-7 bg-green-500 text-white rounded"
          onClick={() => setColor("olive")}
        >
          OLIVE
        </button>
      </div>
    </div>
  );
}

export default App;
