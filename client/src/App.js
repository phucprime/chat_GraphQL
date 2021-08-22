import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client, Chat } from './Chat';

function App() {
  return ( 
    <ApolloProvider client={client}>
      <div className = "App">
        <h2>Messages 💭</h2>
        <Chat/>
      </div>
    </ApolloProvider>
  );
}

export default App;
