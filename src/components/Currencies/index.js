import { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Currency from './Currency';
import Clock from './Clock';

// Composant en 'class' => Currencies
// Il hérite de la class Component de React
class Currencies extends Component {
  componentDidMount() {
    console.log('LE COMPOSANT CURRENCIES A ÉTÉ MONTÉ');
  }

  componentWillUnmount() {
    console.log('LE COMPOSANT CURRENCIES A ÉTÉ DÉTRUIT');
  }

  // la méthode render() permet de retourner le JSX à afficher
  render() {
    console.log('CURRENCIES RENDER');
    // On récupère les props depuis la propriété `this.props` de la class
    // Cette propriété est héritée de `Component`
    // On destructure `this.props` pour récupérer les props
    const {
      currenciesList, onClickCurrency, search, onChangeSearch,
    } = this.props;

    return (
      <div className="currencies">
        {/* <h2 className="currencies-title">Currencies</h2> */}
        <Clock search={search} />
        {/* new Clock({ search: search }) */}
        <input
          type="text"
          placeholder="Rechercher"
          className="currencies-search"
          value={search}
          onChange={(event) => onChangeSearch(event.target.value)}
        />
        <ul className="currencies-list">
          {
            // On map sur la liste des devises pour afficher chaque devise dans un `<li>`
            currenciesList.map((currencyElement) => (
              // On transmet l'object `currencyElement` au complet dans les props
              // grâce au rest operator (les `...`)
              <Currency key={currencyElement.name} {...currencyElement} onClickCurrency={onClickCurrency} />
              // Avec le spread operator sur ...currencyElement, c'est comme si on envoyait TOUTS les ensembles clé/valeur
              // de `currencyElement` au composant `Currency`
              // <Currency key={currencyElement.name} name={currencyElement.name} rate={currencyElement.rate} />
              // équivalent JS pure => const Currency = { ...currencyElement, key: currencyElement.name }
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Currencies;

// Types des props
Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onClickCurrency: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};

// Valeurs par défaut des props
Currencies.defaultProps = {
  currenciesList: [],
};
