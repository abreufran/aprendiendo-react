import logo from './logo.svg';
import './App.css';

function holaMundo(nombre, edad) {
  var presentacion2 = (
    <p>
      Hola Mundo desde una Función. Soy, {nombre}<br></br>
      Tengo {edad} años.
    </p>
  );
  return presentacion2;
}

function App() {
  var nombre = "Francisco Abreu";
  var presentacion = <h2>Hola, soy {nombre}</h2>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo con React!!! <br></br><br></br>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {presentacion}
        {holaMundo(nombre, 40)}
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
