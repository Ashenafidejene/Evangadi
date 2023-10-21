
import './App.css';
import Acadami from './components/Acadami/Acadami';
import HeaderNav from './components/Header/HeaderNav';
import Interviwe from './components/Interviwer/Interviwe';
import ScolarShip from './components/Interviwer/ScolarShip';
import Home from './components/home/Home';
import Winner from './components/winner/Winner';

function App() {
  return (
    <div className="App">
    <HeaderNav />
    <Home/>
    <Winner/>
    <Acadami/>
    <ScolarShip/>
    <Interviwe/>
    </div>
  );
}

export default App;
