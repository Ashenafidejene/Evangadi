
import './App.css';
import HeaderNav from './components/Header/HeaderNav';
import Home from './components/home/Home';
import Winner from './components/winner/Winner';

function App() {
  return (
    <div className="App">
    <HeaderNav />
    <Home/>
    <Winner/>
    </div>
  );
}

export default App;
