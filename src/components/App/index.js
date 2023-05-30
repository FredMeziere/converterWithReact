// == Import
import { Component } from 'react';
import Header from '../Header';
import Amount from '../Amount';
import Currencies from '../Currencies';

import data from '../../data/currencies';

import './styles.css';

// import data from '../../data/currencies';

// == Composant
class App extends Component {
  render() {
    return (
      <div className="converter">
        <Header baseAmount={1} />
        <Currencies currenciesList={data} />
        <Amount value={1.25} currency="United States Dollar" />
      </div>
    );
  }
}
// == Export
export default App;
