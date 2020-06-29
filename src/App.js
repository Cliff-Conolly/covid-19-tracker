import React from 'react';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
// Refactor and use the import pattern below for each component instead of the individual ones above
import { Cards, Chart, CountryPicker } from './components/exports';
import styles from './App.module.css';
import { fetchData } from './API/api'

class App extends React.Component {

  // The data will be an empty object until it is populated in the setState() function below
  state ={
    data:{},
  }

  async componentDidMount() {
    const data = await fetchData();

// Populate the data here:
    this.setState({data: data})
    console.log(data);
  }

  render() {
    // Destructure the data, put it inside a variable and take data outside of 'this.state'
    const { data } = this.state;
    return (
      <div className={styles.container}>
        {/* Pass the data as props to Cards component */}
        <Cards data={data}/>
        <Chart />
        <CountryPicker />
      </div>
    )  
  } 
}

export default App;

