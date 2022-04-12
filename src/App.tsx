import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [names, setNames] = useState(['Renato', 'Henrique', 'Eliana', 'Roseli'])

  useEffect(() => {
    console.log('componente foi montado')

    return () => {
      console.log('componente foi desmontado')
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            names.map((name, index) => <li key={index}>{name}</li>)
          }
        </ul>
        <button onClick={() => {
          setNames([...names, 'Jeremias'])
        }}>
          Adicionar Jeremias
        </button>
      </header>
    </div>
  );
}

export default App;
