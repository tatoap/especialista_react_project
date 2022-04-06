import { useState } from 'react';
import './App.css';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

function App() {
  const [post] = useState({
    title: 'Titulo maneiro',
    content: 'Lorem Ipsum dolor sit amet'
  })

  return (
    <div className="App">
      <header className="App-header">
        <Sidebar post = {post} />
        <Post post = {post} totalComents = {12} />
      </header>
    </div>
  );
}

export default App;
