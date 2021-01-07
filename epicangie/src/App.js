import NavbarDisplay from './Components/SubComponent/NavBar/nav';  
import React, { Component } from 'react';
import EpicAngieApp from './Components/EpicAngie/EpicAngieApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarDisplay/>
        <EpicAngieApp />
      </div>
    );
  }
}

export default App;