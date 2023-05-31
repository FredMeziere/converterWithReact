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

  render() {
    console.log('CURRENCIES RENDER');
    const {
      currenciesList, onClickCurrency, search, onChangeSearch,
    } = this.props;

    return (
      <div className="currencies">
        <Clock search={search} />
        <input
          type="text"
          placeholder="Rechercher"
          className="currencies-search"
          value={search}
          onChange={(event) => onChangeSearch(event.target.value)}
        />
        <ul className="currencies-list">
          {
            currenciesList.map((currencyElement) => (
              <Currency key={currencyElement.name} {...currencyElement} onClickCurrency={onClickCurrency} />
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
