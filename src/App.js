import React from 'react';
import logo from './logo.svg';
import Header from './components/Header.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <div className="container">
    //       <main>
    //         <Switch>
    //           <Route exact path="/homepage"
    //         </Switch>
    //       </main>
    //     </div>
    //   </Router>
    // </div>
    <Header/>
  );
}

export default App;
