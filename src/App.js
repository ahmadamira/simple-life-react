import logo from './logo.svg';
import './App.css';
import Headercom from './components/Header';
import Footercom from './components/Footer';
import Maincom from './components/Main';

function App() {
  return (
    <div className="App">
     <Headercom/>
     <Maincom/>
     <Footercom/>
    </div>
  );
}

export default App;
