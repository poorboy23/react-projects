import { useState } from 'react';

function App() {
  const [username, setUsername] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      Username:
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
export default App