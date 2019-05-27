import React from 'react';
import logo from './logo.svg';
import './App.css';

import SvgComponent from './SvgComponent';

const thisprops = {
  user: {
    location: {
      
    }
  }
};

function App() {

  //                       selected: ((this.state.rxs[rxi]||{}).drugs[di]||{}).selected || false,
  console.log( thisprops.user?.location.whatever?.() );
  
  return (
    <div className="App">
      <SvgComponent onClick={()=> console.log('blah')}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
