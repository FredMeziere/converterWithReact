import { Component } from 'react';
import './styles.scss';
import PropTypes, { shape } from 'prop-types';
import Currency from './Currency';

class Currencies extends Component {
  render() {
    const { currenciesList } = this.props;
    return (
      <div className="currencies">
        <h2 className="currencies-title">Currencies</h2>
        <ul className="currencies-list">
          {
            currenciesList.map((currencyElement) => (
              <Currency key={currencyElement.name} {...currencyElement} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Currencies;

Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
