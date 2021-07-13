import logo from './logo.svg';
import './App.css';
import foto from './knife.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="App-foto" alt="foto" />
        <p>Hi.</p>
      </header>
    </div>
  );
}

export default App;
