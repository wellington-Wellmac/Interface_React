import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="App">
      <h1>Lista de Itens</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - R${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

