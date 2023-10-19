import React, { useEffect, useState } from 'react';
import ToDoList from './components/ToDoList'

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/todos');
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } else {
          console.error('Error fetching data:', response.status, response.statusText);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div className="App">
      <header className="App-header">
        <ToDoList data={data} />
      </header>
    </div>
  );
}

export default App;