import { useState, useEffect } from 'react';
import logo from './logo.svg';



const App= () => {
  const [message, setMessage] = useState("")

  useEffect(() =>{
    fetch("/api").then(res => res.json())
    .then(data => {
      setMessage(data.message)
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
      </header>
    </div>
  );
}

export default App;
