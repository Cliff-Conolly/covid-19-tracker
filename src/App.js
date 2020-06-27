import React from 'react';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import { Cards, Chart, CountryPicker } from './components/exports';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    )  
  } 
}

export default App;

