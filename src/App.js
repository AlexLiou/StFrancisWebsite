import React from 'react';
import Header from './components/Header.js';
import './App.css'
import Homepage from './pages/Homepage.js';
import Aboutpage from './pages/Aboutpage.js';
import Contactpage from './pages/Contactpage.js';
import Staffpage from './pages/Staffpage';
import Footer from './components/footer.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
        <div>
          <main>
            <Switch>
              <Route exact path="/home/" render={(props) => <Homepage {...props}/>}/>
              <Route exact path="/about/" render={(props) => <Aboutpage {...props}/>}/>
              <Route exact path="/contact/" render={(props) => <Contactpage {...props}/>}/>
              <Route exact path="/staff/" render={(props) => <Staffpage {...props}/>}/>
            </Switch>
          </main>
        </div>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
