import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList'

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
        <ContactList />
      </main>
    </div>
  );
}

export default App;
