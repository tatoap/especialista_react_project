import { toNamespacedPath } from 'node:path/win32';
import './App.css';
import Form from './components/Form';

function App() {
  const names = ['Renato', 'Henrique', 'Eliana', 'Roseli']

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            names.map((name, index) => <li key={index}>{name}</li>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
