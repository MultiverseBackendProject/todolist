import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/todos');
        if (response.ok) {
          const data = await response.json();
          setData(data);
          console.log(data)
        } else {
          console.error('Error fetching data:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (data.length === 0) {
    return 'no data atm';
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {data}
        </p>
      </header>
    </div>
  );

}

export default App;
