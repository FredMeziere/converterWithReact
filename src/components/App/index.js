// == Import
import { Component } from 'react';
import Amount from '../Amount';
import Currencies from '../Currencies';
import Header from '../Header';
import './styles.css';
import data from '../../data/currencies';
import Toggler from '../Toggler';

class App extends Component {
  state = {
    isCurrenciesListOpen: true,
    baseAmount: 1,
    selectedCurrency: 'United States Dollar',
    search: '',
  };

  componentDidMount() {
    console.log('APP DID MOUNT');
    this.updatePageTitle();

    document.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        this.setState({
          isCurrenciesListOpen: false,
        });
      }
    });
  }

  componentDidUpdate() {
    console.log('APP DID UPDATE');
    this.updatePageTitle();
  }

  handleClick = () => {
    // On récupère isCurrenciesListOpen depuis le state
    const { isCurrenciesListOpen } = this.state;
    // this.state.isCurrenciesListOpen = false;
    this.setState({
      isCurrenciesListOpen: !isCurrenciesListOpen,
    });
  };

  makeConversion = () => {
    const { baseAmount, selectedCurrency } = this.state;
    const currencyData = data.find((currencyObject) => currencyObject.name === selectedCurrency);
    const { rate } = currencyData;
    const result = baseAmount * rate;
    return Math.round(result * 100) / 100;
  };

  handleCurrencyClick = (clickedCurrencyName) => {
    this.setState({
      selectedCurrency: clickedCurrencyName,
    });
  };

  handleChangeSearch = (value) => {
    this.setState({
      search: value,
    });
  };

  handleAmountChange = (value) => {
    this.setState({
      baseAmount: +value,
    });
  };

  getFilteredCurrencies = () => {
    const { search } = this.state;
    let filteredCurrencies = data;

    if (search.length > 0) {
      filteredCurrencies = data.filter((currencyData) => currencyData.name.toLowerCase().includes(search.toLowerCase()));
    }

    return filteredCurrencies;
  };

  updatePageTitle = () => {
    const { selectedCurrency } = this.state;
    document.title = `Euro to ${selectedCurrency}`;
  };

  render() {
    const {
      isCurrenciesListOpen, baseAmount, selectedCurrency, search,
    } = this.state;

    const convertedAmount = this.makeConversion();
    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} onChangeAmount={this.handleAmountChange} />
        <Toggler isOpen={isCurrenciesListOpen} onEmitClick={this.handleClick} />
        {
          isCurrenciesListOpen && <Currencies currenciesList={filteredCurrencies} onClickCurrency={this.handleCurrencyClick} search={search} onChangeSearch={this.handleChangeSearch} />
        }
        <Amount value={convertedAmount} currency={selectedCurrency} />
      </div>
    );
  }
}

export default App;
