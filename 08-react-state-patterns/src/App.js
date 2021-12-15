import './App.css';
import ScoreKeeper from './ScoreKeeper'
import IconList from './IconList'
import Ball from './Ball'
import Lottery from './Lottery'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ScoreKeeper />
        <IconList /> */}
        <Lottery />
        <Lottery title="Mini Draw" maxNum={10} maxBalls={4}/>
      </header>
    </div>
  );
}

export default App;
