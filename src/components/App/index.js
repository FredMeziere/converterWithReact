// == Import
import { Component } from 'react';
import Amount from '../Amount';
import Currencies from '../Currencies';
import Header from '../Header';
import './styles.css';
import data from '../../data/currencies';
import Toggler from '../Toggler';

// == Composant
// Composant sous la forme d'une class
// Elle hérite de la class Component de React
class App extends Component {
  // On déclare la valeur INITIALE du state
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
    // On récupère les propriétés du state dont on a besoin dans cette fonction
    const { baseAmount, selectedCurrency } = this.state;
    // Récupération des infos de la devise
    const currencyData = data.find((currencyObject) => currencyObject.name === selectedCurrency);
    // Extraction du taux de conversion
    const { rate } = currencyData;
    // Calcul du résultat
    const result = baseAmount * rate;
    // Retourner le résultat
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

  // Une fonction qui reçoi la valeur du champs de type number
  // Et qui mette à jour la propriété baseAmount du state
  handleAmountChange = (value) => {
    this.setState({
      baseAmount: +value, // Le + convertit une chaine de caractères en nombre
    });
  };

  getFilteredCurrencies = () => {
    const { search } = this.state;
    // Récupérer les données
    let filteredCurrencies = data;

    // Si `search` est renseigné (si `search` contient au moins 1 caractère), alors on filtrer
    if (search.length > 0) {
      filteredCurrencies = data.filter((currencyData) => currencyData.name.toLowerCase().includes(search.toLowerCase()));
    }

    return filteredCurrencies;
  };

  updatePageTitle = () => {
    const { selectedCurrency } = this.state;
    document.title = `Euro to ${selectedCurrency}`;
  };

  // la méthode render() permet de retourner le JSX à afficher
  render() {
    // this.state.isCurrenciesListOpen
    const {
      isCurrenciesListOpen, baseAmount, selectedCurrency, search,
    } = this.state;
    // const baseAmount = this.state.baseAmount;
    // const isCurrenciesListOpen = this.state.isCurrenciesListOpen;
    // const currenciesList = this.state.currenciesList;
    // const selectedCurrency = this.state.selectedCurrency;

    const convertedAmount = this.makeConversion();
    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <div className="converter">
        {/* On appelle les composants dans App et on leur passe des props */}
        <Header baseAmount={baseAmount} onChangeAmount={this.handleAmountChange} />
        <Toggler isOpen={isCurrenciesListOpen} onEmitClick={this.handleClick} />
        {
          isCurrenciesListOpen && <Currencies currenciesList={filteredCurrencies} onClickCurrency={this.handleCurrencyClick} search={search} onChangeSearch={this.handleChangeSearch} />
        }
        {/* Équivalent en ternaire de la condition: */}
        {/* {
          this.isCurrenciesListOpen ? <Currencies currenciesList={data} onClickCurrency={this.handleCurrencyClick} /> : null
        } */}
        <Amount value={convertedAmount} currency={selectedCurrency} />
      </div>
    );
  }
}

// Version 'fonction' du composant App
// const App = () => {
//   return (
//     <div className="converter">
//       <Header />
//       <div>Currencies</div>
//       <div>Amount</div>
//     </div>
//   );
// }

// == Export
export default App;
