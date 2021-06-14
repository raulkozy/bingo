import './App.css';
import BgImage from './images/bg.jpg';
import Game from "./components/Game/Game";
import Board from "./Parts/Board";



function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Game />
      </div>
    </div>
  );
}

export default App;
