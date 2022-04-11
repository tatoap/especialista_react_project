import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Post, { PostObject } from './components/Post';

function App() {
  console.log('renderizou app')
  const [post, setPost] = useState<PostObject | undefined>({
    title: 'Titulo maneiro',
    content: 'Lorem Ipsum dolor sit amet'
  })

  if (!post) 
    return <h1>404 - Post não encontrado</h1>

  return (
    <div className="App">
      <header className="App-header"> {
        !!post &&
          <Card align="left" title={"Card"}>
            <Post post = {post} totalComents = {12} />
          </Card>
      }

      <button onClick={() => setPost(undefined)}>
        Remover post
      </button>
      </header>
    </div>
  );
}

export default App;
