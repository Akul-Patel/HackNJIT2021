
import './App.css';
import { useState , useEffect } from "react";

function App() {
  const [deathToday, setDeathToday] = useState(null)
  useEffect(() => {
    fetch('/data')
      .then(response => response.json())
      .then(response => {
        setDeathToday(response[1])
        
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [])
  return (
    <div>
      <p>{deathToday}</p>
    </div>
  );
}

export default App;
