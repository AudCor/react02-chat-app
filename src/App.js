import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'

const myLogo = 'https://i.ibb.co/7bfk8SF/cats-love-computers-4.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Header-Content">
        <img src={myLogo} className="App-logo" alt="logo" />
        <p>
          Vous êtes un chat ? <br />
          Bienvenue !
        </p>
        </div>
      </header>
      <main>
        <Contact name="Garfield" avatar="https://i.ibb.co/QrZvPJf/proxy-duckduckgo-com.jpg" online />
        <Contact name="Attila" avatar="https://i.ibb.co/ZXDtqD2/attila.png" />
        <Contact name="Tom" avatar="https://i.ibb.co/h2LTssM/tom.jpg" online />
      </main>
    </div>
  );
}

export default App;
