
import './App.css';
import Acadami from './components/Acadami/Acadami';
import HeaderNav from './components/Header/HeaderNav';
import Home from './components/home/Home';
import Winner from './components/winner/Winner';

function App() {
  return (
    <div className="App">
    <HeaderNav />
    <Home/>
    <Winner/>
    <Acadami/>
    </div>
  );
}

export default App;
