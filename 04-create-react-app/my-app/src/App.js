import logo from './logo.svg';
import './App.css';
// import {helpful, sing, dance} from './testFunctions'  // Imports all functions
import helpful, {sing, dance} from './testFunctions'   // Imports the default first, then the others

helpful()
sing()
dance()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        Hey, this is another paragraph... reloading automatically thanks to WebPack Hot Reloading.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
 