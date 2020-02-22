import React from 'react';
import logo from './logo.svg';
import Header from './components/Header.js';

import Homepage from './pages/Homepage.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Router>
        <div className="container">
          <main>
            <Switch>
              <Route exact path="/homepage/" render={(props) => <Homepage {...props}/>}/>
            </Switch>
          </main>
        </div>
      </Router> */}
      <Homepage/>
    </div>
  );
}

export default App;
