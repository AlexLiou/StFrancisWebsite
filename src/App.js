import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from 'semantic-ui-react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div class = "About"> </div>

        <Grid divided = 'vertically'>
        <Grid columns = {3}>
        <Grid.Row>
        <Grid.Column>

        <b>Primary Purpose:</b> Our priority is to provide homeless families a safe and secure shelter with caring staff and volunteers.
        Our goal is to transition these families from homelessness, with the support of case management and other agency referrals, into permanent housing. We provide an intake process with individualized case plans that include
        realistic outcomes, while actively listening, coaching and providing feedback to overcoming obstacles.

        </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column>
        <pre></pre>

        <b>ST. FRANCIS HOUSE INC. PROPERTIES:</b>
        The St. Francis House offers emergency shelter to about 35-40 people per night, with priority given to families with children. This house has a
        total of 8 family rooms and 1 room designated for respite patients.
        The Arbor House was acquired by St. Francis House in 2013. Arbor House provides affordable transitional housing ina communal setting to working mothers with children.
        The Sunrise Residence Inn is a permanent housing program that assists homeless working individuals whose goal is to become self-sufficient.

        </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column>
        <pre></pre>

        <b>Homelessness in Alachua:</b>
        Most people who experience homelessness are single adults. However, about 33% of the entire population
        are families with children. Alachua County has 92% of North Central Florida's homeless population. In 2009, St. Francis House provided shelter
        to 403 people where approximately 23,000 daily brunch meals were given. With help of St. Francis and the community, we hope to decrease the number of homeless individuals across the county.


        </Grid.Column>
        </Grid.Row>
        </Grid>
        </Grid>





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
