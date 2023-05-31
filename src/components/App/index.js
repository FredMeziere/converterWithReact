// == Import
import { Component } from 'react';
import Header from '../Header';
import Amount from '../Amount';
import Currencies from '../Currencies';

import data from '../../data/currencies';

import './styles.css';
import Toggler from '../Toggler';

// import data from '../../data/currencies';

// == Composant
class App extends Component {
  state = {
    isCurrenciesListOpen: true,
    baseAmount: 1,
    currenciesList: data,
  };

  handleClick = () => {
    this.setState({
      isCurrenciesListOpen: !this.state.isCurrenciesListOpen,
    });
  };

  render() {
    const { isCurrenciesListOpen, baseAmount, currenciesList } = this.state;

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler isOpen={isCurrenciesListOpen} onEmitClick={this.handleClick} />
        {
          isCurrenciesListOpen && <Currencies currenciesList={currenciesList} />
        }
        <Amount value={1.25} currency="United States Dollar" />
      </div>
    );
  }
}
// == Export
export default App;
