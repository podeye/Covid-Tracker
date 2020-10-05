import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
// Whenever you have index files you do not need to specify .index
// ex import {fetchData} from './api.index'
// index is the default and will be searched from automatically

import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    // fetch data
    const fetchedData = await fetchData(country);

    // set state
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src='https://i.ibb.co/7QpKsCX/image.png'
          alt='COVID-19'
        />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
